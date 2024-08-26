import Navbar from './Navbar';
import Footer from './Footer';
import ProfileDetails from './ProfileDetails';

const Profile = ()=>{ 
  return (
    <>
    <Navbar stickiness="sticky"/>
        <div className="">
            <ProfileDetails/>
        </div>

    <Footer/>
    </>
  )
}

export default Profile;
