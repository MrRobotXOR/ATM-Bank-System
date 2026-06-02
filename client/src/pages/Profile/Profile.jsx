import "./Profile.css";

import Sidebar from "../../components/Sidebar/Sidebar";

import { useEffect, useState } from "react";

import axios from "axios";

const Profile = () => {

  const [profile, setProfile] = useState(null);

  // 🔐 FETCH PROFILE
  useEffect(() => {

    const fetchProfile = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProfile(res.data);

      } catch (error) {

        console.log(error);

      }
    };

    fetchProfile();

  }, []);




  return (

    <div className="profile-dashboard">

      {/* SIDEBAR */}
      <Sidebar />



      {/* PROFILE CONTENT */}
      <div className="profile-content">

        {/* TOP */}
        <div className="profile-top">

          <div>

            <h1>
              My Profile 👤
            </h1>

            <p>
              Manage your banking profile and account details
            </p>

          </div>

        </div>



        {/* PROFILE CARD */}
        <div className="profile-card">

          {/* LEFT */}
          <div className="profile-left">

            <div className="profile-image">

              {profile?.name?.charAt(0)}

            </div>

            <h2>

              {profile?.name}

            </h2>

            <span>
              Premium Banking User
            </span>

          </div>



          {/* RIGHT */}
          <div className="profile-right">

            {/* NAME */}
            <div className="profile-box">

              <label>
                Full Name
              </label>

              <input
                type="text"
                value={profile?.name || ""}
                readOnly
              />

            </div>



            {/* EMAIL */}
            <div className="profile-box">

              <label>
                Email Address
              </label>

              <input
                type="text"
                value={profile?.email || ""}
                readOnly
              />

            </div>



            {/* ACCOUNT NUMBER */}
            <div className="profile-box">

              <label>
                Account Number
              </label>

              <input
                type="text"
                value={profile?.account || ""}
                readOnly
              />

            </div>



            {/* BALANCE */}
            <div className="profile-box">

              <label>
                Current Balance
              </label>

              <input
                type="text"
                value={`₹${profile?.balance || 0}`}
                readOnly
              />

            </div>



            {/* STATUS */}
            <div className="profile-box">

              <label>
                Bank Status
              </label>

              <input
                type="text"
                value="Active"
                readOnly
              />

            </div>



            <button className="edit-btn">

              Edit Profile

            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;