export default function Header(props){
    return(
        <header className="flex items-center justify-between p-4 text-gray-100 bg-green-500">
        <h1 className="text-4xl text-black">{props.title}</h1>
        <Link href="/overview">
          <a className="px-1 text-xl font-medium text-black">Overview</a>
        </Link>
        
        
      </header>
    )
}