interface ValidateProps {
  name: string;
  pass: string;
}

export const validate = ({name, pass}:ValidateProps) => {
  if (!name || !pass) {
    return false;
  }
  if(name.length < 1 || pass.length < 4){
    return false;
  }
  if(name.length > 20 || pass.length > 20){
    return false;
  }
  if(name.match(/[^A-Za-z0-9@_-]/)){
    return false;
  }
  if(pass.match(/[^A-Za-z0-9@_-]/)){
    return false;
  }
  return true;
}