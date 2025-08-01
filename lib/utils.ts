import { GET } from "@/app/api/feedback/route";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const UserLoginChek = async (id:any) => {
  if(!id){
    return false;
  }
  const checkUser = await GET(id)
  if(checkUser.status === 200){
    return true;
  }
  return false;
}
