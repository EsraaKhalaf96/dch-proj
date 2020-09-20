import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessagesHelper } from './MessagesService';
//import { MessagesTypeEnum } from '../enum/MessagesTypeEnum';

@Injectable()
export class FormBase implements OnInit {

    constructor(public _msgs: MessagesHelper) {
    }

    ngOnInit() { }

    formObject: FormGroup;
    formObject2: FormGroup;
    formObject3: FormGroup;
    formObject4: FormGroup;
    formObject5: FormGroup;
    formObject6: FormGroup;
    formObject7: FormGroup;
    formObject8: FormGroup;
    _messages: string[] = [];
    isWaitingLongProccess: boolean = false;
    waitingProccessBool: number = 0;

    validateControl(controlKey: string) {
        return this.validateControlService(this.formObject, controlKey, true);
    }

    validateControl2(controlKey: string) {
        return this.validateControlService(this.formObject2, controlKey, true);
    }
    validateControl3(controlKey: string) {
        return this.validateControlService(this.formObject3, controlKey, true);
    }

    validateControl4(controlKey: string) {
        return this.validateControlService(this.formObject4, controlKey, true);
    }
    validateControl5(controlKey: string) {
        return this.validateControlService(this.formObject5, controlKey, true);
    }

    validateControl6(controlKey: string) {
        return this.validateControlService(this.formObject6, controlKey, true);
    }
    validateControl7(controlKey: string) {
        return this.validateControlService(this.formObject7, controlKey, true);
    }

    validateControl8(controlKey: string) {
        return this.validateControlService(this.formObject8, controlKey, true);
    }

    validateForm() {
        this._messages = this.validateFormService(this.formObject, true);
        return this._messages;
    }

    validateForm2() {
        this._messages = this.validateFormService(this.formObject2, true);
        return this._messages;
    }

    validateForm3() {
        this._messages = this.validateFormService(this.formObject3, true);
        return this._messages;
    }

    validateForm4() {
        this._messages = this.validateFormService(this.formObject4, true);
        return this._messages;
    }
    validateForm5() {
        this._messages = this.validateFormService(this.formObject5, true);
        return this._messages;
    }

    validateForm6() {
        this._messages = this.validateFormService(this.formObject6, true);
        return this._messages;
    }
    validateForm7() {
        this._messages = this.validateFormService(this.formObject7, true);
        return this._messages;
    }

    validateForm8() {
        this._messages = this.validateFormService(this.formObject8, true);
        return this._messages;
    }

    isImageProcces(isProccessing) {
        if (isProccessing == true) {
            this.waitingProccessBool = this.waitingProccessBool + 1;
        } else {
            this.waitingProccessBool = this.waitingProccessBool - 1;
        }
        if (this.waitingProccessBool == 0) {
            this.isWaitingLongProccess = false;
        } else {
            this.isWaitingLongProccess = true;
        }
    }


    // return list of error messages
    public validationMessages() {
        const messages = {
            required: 'Required',
            minlength: 'Min Length is ',
            maxlength: 'Max Length is ',
            email: 'This email address is invalid',
            is1980OrLater: 'Please enter a date that is after 01/01/1980.',
            maxDateFailed: (failText: string) => {
                return failText;
            },
            minDateFailed: (failText: string) => {
                return failText;
            },
            invalid_characters: (matches: any[]) => {

                let matchedCharacters = matches;

                matchedCharacters = matchedCharacters.reduce((characterString, character, index) => {
                    let string = characterString;
                    string += character;

                    if (matchedCharacters.length !== index + 1) {
                        string += ', ';
                    }

                    return string;
                }, '');

                return `These characters are not allowed: ${matchedCharacters}`;
            },
        };

        return messages;
    }

    validateControlService(formToValidate: FormGroup, controlKey: string, checkDirty?: boolean) {
        const form = formToValidate;
        const messages = this.validationMessages();
        let errorStr: string = '';

        const control = form.get(controlKey)

        if (control != undefined) {
            if (!checkDirty || (control.dirty || control.touched)) {
                const controlErrors = control.errors;

                for (let ctrlError in controlErrors) {
                    errorStr += messages[ctrlError];

                    if (ctrlError == "minlength") {
                        errorStr += " " + controlErrors.minlength.requiredLength;
                    }
                    if (ctrlError == "maxlength") {
                        errorStr += " " + controlErrors.maxlength.requiredLength;
                    }
                }
            }
        }

        return errorStr;
    }
    // Validate form instance
    // check_dirty true will only emit errors if the field is touched
    // check_dirty false will check all fields independent of
    // being touched or not. Use this as the last check before submitting
    public validateFormService(formToValidate: FormGroup, checkDirty?: boolean) {
        const form = formToValidate;
        const messages = this.validationMessages();
        let errorStr: string[] = [];
        let tempErrorStr = "";

        for (let formElem in form.controls) {
            const control = form.get(formElem)
            const controlErrors = control.errors;
            for (let ctrlError in controlErrors) {

                tempErrorStr = messages[ctrlError];
                if (ctrlError == "minlength") {
                    tempErrorStr += " " + controlErrors.minlength.requiredLength;
                }
                if (ctrlError == "maxlength") {
                    tempErrorStr += " " + controlErrors.maxlength.requiredLength;
                }

                errorStr.push(formElem + " " + tempErrorStr);//messages[ctrlError]
            }

        }

        return errorStr;
    }


}