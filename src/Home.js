import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import Resources from "./components/resources/Resources";
import Stories from "./components/stories/Stories";
import Box from "./components/box/Box";
import Plus from "./components/plus/Plus";
const Home = () => {
  
  return (
    <>
    <Navbar />
    <>
      

      <div className="container ">

        <div className='row'>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="p-5">
              <h1 className='display-5 fw-bold'>Help kids become their best selves—together</h1>
              <p className='lead'>ClassDojo helps teachers and families team up so students can thrive</p>
              <h3>Sign up as a...</h3>

              <div className="row">
                <div className="col-3">
                  <center>
                    <div className="border rounded p-3">
                      <img src="https://www.classdojo.com/static/4550dccbbab891e3074e409442729d66/f8671/teacher_badge.png" alt="Teacher Image" className='w-100' />
                      <b className="mt-2">Teacher</b></div>
                  </center>
                </div>
                <div className="col-3">
                  <center>
                    <div className="border rounded p-3">
                      <img src="https://www.classdojo.com/static/56e860e15d85b5f338f471efc142e547/f8671/parent_badge.png" alt="Teacher Image" className='w-100' />
                      <b className="mt-2">Parent</b></div>
                  </center>
                </div>
                <div className="col-3">
                  <center>
                    <div className="border rounded p-3">
                      <img src="https://www.classdojo.com/static/2e9aa1449e3deeae0e4cc7b203577494/f8671/student_badge.png" alt="Teacher Image" className='w-100' />
                      <b className="mt-2">Student</b></div>
                  </center>
                </div>
                <div className="col-3">
                  <center>
                    <div className="border rounded p-3">
                      <img src="https://www.classdojo.com/static/fd1ce8f9d8f7b5c0771eafca1a424193/f8671/school_leader_badge.png" alt="Teacher Image" className='w-100' />
                      <b className="mt-2">School Leader</b></div>
                  </center>
                </div>
              </div></div>
          </div>


          <div className="col-lg-6 col-md-6 col-sm-12">

            <video src="https://www.classdojo.com/static/header-video-6feb5791183a1c0c869ae194ddb6af16.mp4" className='w-100 p-5'></video>
          </div>

        </div>
      </div>

      <div className="row bg-grey">

        <div className="col">
          <br />
          <br />
          <h3 className='text-center p-5 m-5'>ClassDojo connects teachers with students and parents to build amazing classroom communities</h3>
          <div className='row justify-content-center'>
            <Box card_title="Create a positive culture" card_text="Teachers can encourage students for any skill or value — whether it's working hard, being kind, helping others or something else" img_link="https://www.classdojo.com/static/daef618c04d7456bf9cda32910f27aed/1689f/33ff5984-f5cb-4d9a-aa7a-fbbbc9382d7a.png" />
            <Box card_title="Give students a voice" card_text="Students can showcase and share their learning by adding photos and videos to their own portfolios" img_link="https://www.classdojo.com/static/558793ea8dd2a2dd248b3dcc6ffbcbd7/1689f/dd8bb1fd-2bd8-49ca-b677-532d753b24b1.png" />
            <Box card_title="Share moments with parents" card_text="Get parents engaged by sharing photos and videos of wonderful classroom moments" img_link="https://www.classdojo.com/static/ce3a961fdbe41fbce9a2128640a14849/1689f/bbbcc6ee-871d-4ce6-8b7f-9477cca36663.png" />
          </div>
        </div>
      </div>

      <div>
        <Stories />
      </div>

      <div>
        <Resources />
      </div>

      <div>
        <Plus />
      </div>


    </>
    <Footer />
    </>
    
  );
};

export default Home;
