import { AbstractControl, ValidationErrors } from '@angular/forms';

export const emailRegex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
export const phoneRegex = '[0-9]+';


export const validateEqualsPass = (fg: AbstractControl): ValidationErrors | null => {

    const { password, passwordConfirm } = fg.value;

    if (password && passwordConfirm && password === passwordConfirm) {
        fg.get('password')?.setErrors(null);
        return null;
    }
    if (password && passwordConfirm) {
        fg.get('password')?.setErrors({ equals: true });
    }
    return { equals: true }
}