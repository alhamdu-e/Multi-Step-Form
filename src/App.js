function App() {
	return (
		<div className="bg-[#EEF5FF] h-screen">
			<div
				className=" h-[25vh]  bg-repeat flex justify-center items-start pt-8 space-x-3"
				style={{
					backgroundImage: "url('./images/bg-sidebar-mobile.svg')",
				}}>
				<button className=" rounded-full px-2  border font-bold"> 1</button>
				<button className="rounded-full px-2 border font-bold">2</button>
				<button className=" rounded-full px-2 border font-bold ">3</button>
				<button className=" rounded-full px-2 border font-bold">4</button>
			</div>

			<div className="p-4 ">
				{/* Step one  */}
				{/* <div className="bg-white rounded-lg -mt-20 flex flex-col p-8  space-y-4">
					<h2 className="text-[#042A56] font-bold text-3xl">Personal Info</h2>
					<p className="w-[275px] text-gray-400 font-semibold">
						Please Provide your name,email,Adress Phone Number
					</p>
					<div className="flex flex-col ">
						<label className="text-[#042A56] font-semibold">Name</label>
						<input
							type="text"
							placeholder="e.g. Stephen King"
							className="focus:outline-none border p-1.5 px-4 "
						/>
					</div>
					<div className="flex flex-col ">
						<label className="text-[#042A56] font-semibold">Email Adress</label>
						<input
							type="text"
							className="focus:outline-none border p-1.5 px-4"
							placeholder="e.g. Stephenkinge.lorem.com"
						/>
					</div>
					<div className="flex flex-col ">
						<label className="text-[#042A56] font-semibold">Phone Number</label>
						<input
							type="text"
							className="focus:outline-none border p-1.5 px-4"
							placeholder="e.g. +1 234 567 89"
						/>
					</div>
				</div> */}

				{/* Step Two */}
				{/* <div className="bg-white rounded-lg -mt-20 flex flex-col p-8  space-y-4">
					<h2 className="text-[#042A56] font-bold text-3xl">
						Select Your Plan
					</h2>
					<p className="w-[275px] text-sm text-gray-400 font-semibold">
						You Have The Option of Monthely or Yearly biling
					</p>
					<div className="flex flex-col space-y-3">
						<div className="flex  items-center space-x-3 border border-[#0d4686]  rounded-lg p-4 bg-[#eeee]">
							<img src="./images/icon-arcade.svg" alt="" />
							<div className="flex flex-col space-y-0.5">
								<label className="text-[#042A56] font-bold">Arcade</label>
								<p className="text-sm text-gray-400">$9/mo</p>
							</div>
						</div>
						<div className="flex  items-center space-x-3 border  rounded-lg p-4">
							<img src="./images/icon-Advanced.svg" alt="" />
							<div className="flex flex-col space-y-0.5">
								<label className="text-[#042A56] font-bold">Advanced</label>
								<p className="text-sm text-gray-400">$12/mo</p>
							</div>
						</div>
						<div className="flex  items-center space-x-3 border rounded-lg p-4 ">
							<img src="./images/icon-pro.svg" alt="" />
							<div className="flex flex-col space-y-0.5">
								<label className="text-[#042A56] font-bold">Pro</label>
								<p className="text-sm text-gray-400">$15/mo</p>
							</div>
						</div>
					</div>
				</div> */}

				{/* Step Theree */}
				{/* <div className="bg-white rounded-lg -mt-20 flex flex-col p-8  space-y-4">
					<h2 className="text-[#042A56] font-bold text-3xl">Pick add-ons</h2>
					<p className="w-[275px] text-sm text-gray-400 font-semibold">
						Add-ons help enhancing your gaming experience
					</p>
					<div className="flex flex-col space-y-3">
						<div className="flex  items-center space-x-3 border justify-between border-blue-700  rounded-lg p-4 bg-[#F8F9FE]">
							<div className="flex items-center space-x-3 ">
								<input type="checkbox" className=" w-5 h-6" checked />
								<div className="flex flex-col space-y-0.5">
									<label className="text-[#042A56] font-bold">
										Online Service
									</label>
									<p className="text-sm text-gray-400">
										Acess to multiplayer Games
									</p>
								</div>
							</div>
							<p className=" font-medium text-blue-600">+$1/mo</p>
						</div>

						<div className="flex  items-center space-x-3 border justify-between border-blue-700  rounded-lg p-4 bg-[#F8F9FE]">
							<div className="flex items-center space-x-3 ">
								<input type="checkbox" className=" w-5 h-6" checked />
								<div className="flex flex-col space-y-0.5">
									<label className="text-[#042A56] font-bold">
										Larger Storage
									</label>
									<p className="text-sm text-gray-400">
										Extra 1TB of cloud save
									</p>
								</div>
							</div>
							<p className=" font-medium text-blue-600">+$2/mo</p>
						</div>

						<div className="flex  items-center space-x-3 border justify-between  rounded-lg p-4 bg-[#F8F9FE]">
							<div className="flex items-center space-x-3 ">
								<input type="checkbox" className=" w-5 h-6" />
								<div className="flex flex-col space-y-0.5">
									<label className="text-[#042A56] font-bold">
										Customizable Profile
									</label>
									<p className="text-sm text-gray-400">
										Custome Theme on Your Profile
									</p>
								</div>
							</div>
							<p className=" font-medium text-blue-600">+$2/mo</p>
						</div>
					</div>
				</div> */}

				<div className="bg-white rounded-lg -mt-20 flex flex-col p-8  space-y-4">
					<h2 className="text-[#042A56] font-bold text-3xl">Finishing Up</h2>
					<p className="w-[275px] text-sm text-gray-400 font-semibold">
						Double-check everything looks Ok before comfirming
					</p>
					<div className="flex flex-col rounded-lg  bg-[#F8F9FE] p-4">
						<div className="flex  items-center space-x-3  justify-between  border-b pb-3">
							<div className="flex items-center space-x-3 ">
								<div className="flex flex-col space-y-0.5">
									<label className="text-[#042A56] font-bold">
										Arcade(monthly)
									</label>
									<a
										className="text-sm text-gray-400 border-gray-400 w-fit  border-b-2"
										href="google.com ">
										Change
									</a>
								</div>
							</div>
							<p className=" font-bold text-[#2a0d79ee]">$9/mo</p>
						</div>
						<div className="flex  items-center space-x-3 pt-2 justify-between">
							<div className="flex items-center space-x-3 ">
								<div className="flex flex-col space-y-0.5">
									<label className="text-gray-400 font-normal">
										Online Service
									</label>
								</div>
							</div>
							<p className=" font-medium text-[#2a0d79ee]">+$1/mo</p>
						</div>
						<div className="flex mt-1 items-center space-x-3 justify-between">
							<div className="flex items-center space-x-3 ">
								<div className="flex flex-col space-y-0.5">
									<label className="text-gray-400 font-normal">
										Larger Storage
									</label>
								</div>
							</div>
							<p className=" font-medium text-[#2a0d79ee]">+$2/mo</p>
						</div>
					</div>
					<div className="flex items-center space-x-3 justify-between pl-3 pt-5">
						<div className="flex items-center space-x-3 ">
							<div className="flex flex-col space-y-0.5">
								<label className="text-gray-400 font-normal">
									Toltal (Per Month)
								</label>
							</div>
						</div>
						<p className=" font-bold text-blue-700">+$12/mo</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center bg-white h-[59px] fixed bottom-0 left-0 right-0  pb-5 pr-5 pl-5 pt-3">
				<button className="text-gray-400">Go Back</button>
				<button className="bg-[#042A56] py-2 px-3 rounded-lg text-white ">
					{" "}
					Next Step
				</button>
			</div>
		</div>
	);
}

export default App;
