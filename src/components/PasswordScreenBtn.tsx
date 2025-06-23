const PasswordScreenBtn = ()=>{
  const btnName = ["Sign On", "Clock In", "Clock Out", "Break", "Resume", "Device Settings"];
  return(
    <div className="flex flex-col sm:gap-2 gap-4 md:gap-1.5 w-6/12">
      {
        btnName.map(ele => (
          <button key={ele} className="border-[1px] border-black w-full   rounded-tl-2xl rounded-br-2xl p-2 sm:p-1 md:p-1.5 px-9 text-2xl md:text-xl font-bold bg-[linear-gradient(to_bottom,#b91c1c,#fca5a5,#b91c1c)] text-black cursor-pointer hover:bg-[linear-gradient(to_bottom,#b91c1c,#fee2e2,#b91c1c)]">{ele}</button>
        ))
      }
    </div>

  )
}

export default PasswordScreenBtn;