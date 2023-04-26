import * as bcrypt  from 'bcrypt'

export const encrypt = async(password: string) => {
    const hasha = await bcrypt.hash(password, 10)
    console.log(hasha)
    return hasha
}

export const verifyPassword =async (password:string, hashPassword: string) => {
    const compare = await bcrypt.compare(password, hashPassword)
    return compare
}