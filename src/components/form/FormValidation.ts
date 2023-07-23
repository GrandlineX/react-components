import { FormConf, FormConfEl, FormErrorType, InputOption } from './FormTypes';

// eslint-disable-next-line import/prefer-default-export
export function requiredFieldValidation(
  conf: FormConf,
  form: any,
): FormErrorType | null {
  const error: FormErrorType = {
    global: [],
    field: [],
  };
  conf.forEach((opt) => {
    if (opt) {
      let doList: FormConfEl[];
      if (Array.isArray(opt)) {
        doList = opt;
      } else {
        doList = [opt];
      }
      doList.forEach((del) => {
        if (!del) {
          return;
        }
        let foList: InputOption[];
        if (Array.isArray(del)) {
          foList = del;
        } else {
          foList = [del];
        }
        foList.forEach((fel) => {
          if (fel.required) {
            if (
              !form ||
              form[fel.key] === '' ||
              form[fel.key] === undefined ||
              form[fel.key] === null ||
              (Array.isArray(form[fel.key]) && form[fel.key].length === 0)
            ) {
              error.field?.push({
                key: fel.key,
                message: 'Required fields are not allowed to be empty',
              });
            }
          }
        });
      });
    }
  });

  if (error.field?.length === 0 && error.global?.length === 0) {
    return null;
  }
  return error;
}
