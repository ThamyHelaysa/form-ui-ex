const maskPhone = (val)=>{
  val = val.replace(/\D/g,"");
  val = val.replace(/^(\d{2})(\d)/,"($1) $2");
  val = val.replace(/(\d)(\d{4})$/,"$1-$2");
  return val
}

export default maskPhone;