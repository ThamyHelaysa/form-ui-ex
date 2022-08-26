const maskTaxvat = (val) => {
  val = val.replace(/\D/g,"");
  val = val.replace(/(\d{3})(\d)/,"$1.$2");
  val = val.replace(/(\d{3})(\d)/,"$1.$2");
  val = val.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
  return val;
}

export default maskTaxvat;