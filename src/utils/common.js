export const isValidEmail = email => (/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i).test(email)
export const isNotNull = value => {
  value = value.trim();
  return !(value === '' || (/^\s*$/.test(value)));
}  

export const func = {
  titleCase: value => {
    value = value.split('');
    value[0] = value[0].toUpperCase();
    return value.join('');
  }
}