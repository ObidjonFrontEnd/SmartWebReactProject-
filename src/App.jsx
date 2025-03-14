// font
import "@fontsource/dm-sans"; 
import "@fontsource/rubik";

//image
import Logo from "./assets/Logo.png";
import Hero from "./assets/Hero.png";

//icons
import { BsRocketFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { PiUsersThree } from "react-icons/pi";
import { RiThumbUpLine } from "react-icons/ri";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineWeb } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbArrowNarrowRight } from "react-icons/tb";

function App() {

let cardsArr = [
	{
		contet:"Projects completed",
		count:"5200+",
		icon:<BsRocketFill/>,
		bg:"#79E28A"
	},
	{
		contet:"Active clients",
		count:"500+",
		icon:<PiUsersThree/>,
		bg:"#60DAFF"
	},
	{
		contet:"Happy clients",
		count:"4500+",
		icon:<RiThumbUpLine/>,
		bg:"#F37168"
	},
]
let cardsArr1 = [
	{
		title: "Website design",
		contet:"Need something changed or is there something not quite working the best service",
		icon:<HiOutlineDesktopComputer/>,
	},
	{
		title: "Web development",
		contet:"Need something changed or is there something not quite working the best service",
		icon:<MdOutlineWeb/>,
	},
	{
		title: "Web application",
		contet:"Need something changed or is there something not quite working the best service",
		icon:<HiOutlineSquares2X2/>,
	},
]

	return (
    <section className='bg-[#F9FAFF]'>
     <header className='mb-[120px]'>
				<div className="nav flex justify-between px-[15px] lg:max-w-[1280px] mx-auto py-[30px] md:py-[51px] items-center">

					<div className="logo flex items-center gap-[8px]">
							<img src={Logo} alt="" />
							<h2 className='text-[20px] md:text-[26px] text-[#3D3D3F] font-rubik font-medium uppercase'>Designzcy</h2>
					</div>

					<ul className='font-DM font-medium text-[14px] gap-[60px] text-[#3D3D3F] hidden md:flex'>
						<li className='hover:bg-gradient-to-r from-[#F35F2F] to-[#F35F2FBF] hover:text-transparent bg-clip-text'>Home</li>
						<li className='hover:bg-gradient-to-r from-[#F35F2F] to-[#F35F2FBF] hover:text-transparent bg-clip-text'>Service</li>
						<li className='hover:bg-gradient-to-r from-[#F35F2F] to-[#F35F2FBF] hover:text-transparent bg-clip-text'>Portfolio</li>
						<li className='hover:bg-gradient-to-r from-[#F35F2F] to-[#F35F2FBF] hover:text-transparent bg-clip-text'>Blog</li>
					</ul>

					<div className="">
						<button className='hidden md:block px-[24px] py-[12px]  bg-gradient-to-t from-[#F35F2F] to-[#F35F2FBF] text-[14px] text-[white] rounded-[5px] font-medium leading-[100%] tracking-[0%] font-DM'>Contact us</button>
						<i className='md:hidden text-[26px] text-[black] hover:text-[#F35F2F] duration-[0.5s]'><IoMdMenu/></i>
					</div>
				</div>

				<div className="hero flex lg:max-w-[1280px] mx-auto px-[15px] flex-col-reverse lg:flex-row">


						<div className="heroLeft lg:w-[45%] flex flex-col gap-[20px] lg:gap-[40px]  font-rubik font-normal lg:text-[20px] text-[16px] text-[#3D3D3F]">

								<h1 className='font-medium text-[32px] text-center lg:text-start md:text-[52px] lg:text-[72px]'>Smart Web Design Agency</h1>
								<p className='text-center lg:text-start'>We will provide best web design and business devlopment service clients expectation and satisfaction guarantee.</p>
								<button className=' mx-auto lg:mx-0 px-[28px] py-[14px]  bg-gradient-to-t from-[#F35F2F] to-[#F35F2FBF] text-[14px] text-[white] rounded-[5px] font-medium leading-[100%] tracking-[0%] font-DM max-w-[219px]'>Free consultation</button>

						</div>


						<div className="heroRight lg:w-[55%]">
								<img src={Hero} alt="" className='w-fill mx-auto' />
						</div>


				</div>
		 </header>

			<main>
				<div className="cards max-w-[1280px] mx-auto px-[15px]">

					<div className="title text-center mb-[55px]">
							<h2 className='text-[#3D3D3F] font-bold text-[32px] md:text-[40px]'>We Provide the Best Web services</h2>
					</div>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  border-[#EBEBEBCC] border-[2px] border-solid rounded-[17px] mb-[60px]">
						{cardsArr.map((card)=>{
								return (
											<div className="py-[54px] md:border-t-0 px-[67px] lg:border-r-[#EBEBEBCC] lg:border-r-[2px] lg:border-r-solid text-center font-DM text-[#3D3D3F] w-full lg:rounded-r-[17px]  border-t-[#EBEBEBCC] border-t-[2px] border-t-solid">
														<div style={{ backgroundColor: card.bg }} className="w-[100px] h-[90px] rounded-[15px] flex justify-center items-center text-[45px] text-white mx-auto">
															<i>{card.icon}</i>
														</div>
														<p className='text-[36px] font-bold mt-[23px] mb-[13px]'>{card.count}</p>
														<p className='text-[24px] font-normal text-[#3d3d3faf]'>{card.contet}</p>
											</div>
								)
						})}
					</div>

					<div className="title text-center mb-[55px]">
							<h2 className='text-[#3D3D3F] font-bold text-[32px] md:text-[40px]'>What Service We’re Offering</h2>
					</div>


					<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[17px] pb-[100px] gap-[50px]">
						{cardsArr1.map((card)=>{
								return (
											<div className="py-[54px] relative px-[67px] text-center font-DM text-[#3D3D3F] w-full bg-white group duration-[0.5s]">
														<div  className="w-[102px] h-[102px] absolute top-[-50px] left-1/2 transform -translate-x-1/2 rounded-[50%] flex justify-center items-center text-[45px] text-black mx-auto shadow-xl bg-white group-hover:text-white group-hover:bg-[#FF7A50D4] duration-[0.5s]">
															<i>{card.icon}</i>
														</div>
														<p className='text-[24px] font-bold mt-[23px] mb-[13px]'>{card.title}</p>
														<p className='text-[16px] font-normal text-[#595959] mb-[27px]'>{card.contet}</p>
													<p className='w-[42px] h-[42px] bg-[#F1F1F5] text-[#595959] flex items-center justify-center rounded-[50%] duration-[0.5s] mx-auto group-hover:text-white group-hover:bg-[#FF7A50D4]	'><TbArrowNarrowRight/></p>
											</div>
								)
						})}
					</div>


				</div>
			</main>

    </section>
  )
}

export default App
