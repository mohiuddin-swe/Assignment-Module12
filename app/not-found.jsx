import Image from 'next/image'
export default function NotFoundPage() {
  return (
    <div>Page Not Found</div>
    <Image
      src="/error.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    
  ) 
}
