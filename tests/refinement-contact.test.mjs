import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = ts.transpileModule(readFileSync('app/_lib/contact-validation.ts','utf8'), {compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {contactError} = await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
test('selected channels require reachable matching details before submitting',()=>{
 assert.match(contactError('person@example.com','','whatsapp'),/phone number/);
 assert.match(contactError('','0724026893','email'),/email address/);
 assert.match(contactError('','123','call'),/valid phone/);
 assert.equal(contactError('','072 402 6893','call'),'');
 assert.equal(contactError('person@example.com','','email'),'');
 assert.equal(contactError('','+44 7700 900123','whatsapp'),'');
});
