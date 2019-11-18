const rules = {
    required: (v: any) => !!v || 'Field is required',
    email: (v: any) => /.+@.+/.test(v) || 'E-mail must be valid',
    password: (v: any) => v.length >= 6 || 'Password must be greater than 6 characters'
  }
  
  export default rules