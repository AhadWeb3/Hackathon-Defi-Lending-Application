
const Lender = () => {
    return (

        <div className=" Pastel bg-gradient-to-tr from-violet-500 to-orange-300 h-screen mx-auto">
            <div className='text-3xl font-bold text-black p-2 text-center'>
                Welcome to Lendors Page!
            </div>
            <div className="flex justify-center m-8">
                <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
                    <form>
                        <div class="form-group mb-6">
                            <label for="exampleInputEmail1" class="form-label inline-block mb-2 text-gray-700">Amount to deposit</label>
                            <input type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Enter crypto" />
                            <small id="emailHelp" class="block mt-1 text-xs text-gray-600">Lender will deposite amount into defi account.</small>
                        </div>

                        <button type="submit" class="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Lender;