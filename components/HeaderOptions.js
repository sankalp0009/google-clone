import HeaderOption from "./HeaderOption"
import{
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52  border-b-[1px]">
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected/>
                <HeaderOption Icon={PhotographIcon} title="Images" selected/>
                <HeaderOption Icon={PlayIcon} title="Videos" selected/>
                <HeaderOption Icon={NewspaperIcon} title="News" selected/>
                <HeaderOption Icon={MapIcon} title="Maps" selected/>
                <HeaderOption Icon={DotsVerticalIcon} title="More" selected/>
            </div>
           <div className="flex space-x-4">
           <p className='link'>Settings</p>
          <p className='link'>Tools</p>
               </div> 
        </div>
    )
}

export default HeaderOptions
