import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    // Verifica se a senha tem pelo menos 6 caracteres
    if (!password || password.length < 6) {
      return { passwordLength: true };
    }

    // Verifica se a senha contém pelo menos um caractere especial
    const specialCharRegex = /[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/;
    if (!specialCharRegex.test(password)) {
      return { passwordSpecialChar: true };
    }

    // Verifica se a senha contém pelo menos uma letra maiúscula
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
      return { passwordUppercase: true };
    }

    // Verifica se a senha contém pelo menos uma letra minúscula
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
      return { passwordLowercase: true };
    }

    // Verifica se a senha contém pelo menos um número
    const numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
      return { passwordNumber: true };
    }

    // Retorna null se a senha atende aos critérios de validação
    return null;
  };
}
