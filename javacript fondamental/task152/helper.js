export const checkAccess = (user, password) => {
  return user.password === password && user.role === 'admin';
}

export const grantAccess = (name) => {
    console.log(`Congratulations, ${name}. Access granted.`)
}

export const denyAccess = (name) => {
  console.log(`Sorry, ${name}. Access denied.`)
}

