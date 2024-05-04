import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('Имя обязательно для заполнения'),
    lastName: yup.string().required('Фамилия обязательна для заполнения'),
    middleName: yup.string(),
    dateOfBirth: yup
      .string()
      .required('Дата рождения обязательна для заполнения')
      .matches(
        /^(0?[1-9]|[12][0-9]|3[01])[./](0?[1-9]|1[0-2])[./]\d{4}$/,
        'Дата рождения должна быть в формате dd.mm.yyyy'
      ),
    city: yup.string(),
  });

export default schema;
