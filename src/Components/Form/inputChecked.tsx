


 function InputChecked (){
    return(
        <input
        type="checkbox"
        defaultChecked
        className={`mr-1 w-1/12 h-full relative transition-all bg-transparent border-4 cursor-pointer border-slate-600 appearance-none rounded-lg checked:bg-slate-600 before:content[''] before:absolute before:inset-0 before:bg-checked before:bg-contain before:bg-no-repeat before:bg-center before:translate-x-5 before:hidden checked:before:block checked:before:translate-x-0 before:hover:bg-cruz`}
      />
    )
 }

 export { InputChecked }