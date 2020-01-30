import styles from '../PersonalScreen/style';

const fillName = {
  field: 'NAME',
  type: 'fullname',
  styleContainer: styles.fillField
};
const fillEmail = {
  field: 'EMAIL',
  type: 'email',
  styleContainer: styles.fillField
};
const fillPassword = {
  field: 'PASSWORD',
  type: 'password',
  styleContainer: styles.fillField
};
const fillConfirm = {
  field: 'CONFIRM PASSWORD',
  type: 'password',
  styleContainer: styles.fillField
};
const fillCPF = {
  field: 'CPF NUMBER',
  type: 'number',
  styleContainer: styles.fillField
};
const fillPhone = {
  field: 'PHONE NUMBER',
  type: 'number',
  styleContainer: styles.fillField
};
const fillBirth = {
  field: 'BIRTHDAY',
  type: 'number',
  styleContainer: styles.fillField
};

const fills = [
  fillName,
  fillEmail,
  fillPassword,
  fillConfirm,
  fillCPF,
  fillPhone,
  fillBirth
];

const fillState = {
  field: 'STATE',
  type: 'fullname',
  styleContainer: styles.fillField
};
const fillCity = {
  field: 'CITY',
  type: 'fullname',
  styleContainer: styles.fillField
};
const fillNeighbor = {
  field: 'NEIGHBORHOOD',
  type: 'fullname',
  styleContainer: styles.fillField
};
const fillStreet = {
  field: 'STREET',
  type: 'fullname',
  styleContainer: styles.fillField
};
const fillAdressNumber = {
  field: 'NUMBER',
  styleContainer: styles.fillField
};
const fillZip = {
  field: 'ZIP CODE',
  type: 'number',
  styleContainer: styles.fillField
};

const fillsAdress = [
  fillState,
  fillCity,
  fillNeighbor,
  fillStreet,
  fillAdressNumber,
  fillZip
];

export { fills, fillsAdress };
