
import './Appbar.css'

function Appbar() {
  const Items=[
    {
        id:0,
        ImgUrl:"image 901.svg",
        Text:"New"
    },
    {
        id:1,
        ImgUrl:"image 897.svg",
        Text:"Patient"
    },
    {
        id:2,ImgUrl:"image 898.svg",
        Text:"Folder"
    },
    {
        id:3,ImgUrl:"image 899.svg",
        Text:"Upload"
    },
    {
        id:4,ImgUrl:"image 900.svg",
        Text:"Report"
    },
    {
        id:5,ImgUrl:"image 901.svg",
        Text:"Setting"
    },
    {
        id:6,ImgUrl:"image 902.svg",
        Text:"Logout"
    }
  ]
    return (
    <div className="container" style={{borderRight:'1px solid grey',height:'100vh'}}>
        
        <div className="row" style={{backgroundColor:'#29B712', height:'10vh'}}>
            <img src="git.png" style={{width:'80px', height:'50px'}} alt="" />
        </div>
        
        <div className="row">
            {Items.map(item=><div key={item.id} className='row mt-2 mb-1'>
                <div><img src={item.ImgUrl} alt="logo" /></div>
                <p>{item.Text}</p>
            </div>
                )}
        </div>
    </div>
  )
}

export default Appbar;