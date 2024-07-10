import React, { useState } from 'react';
import './TabComponent.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('personal');

  // Personal Information State
  const [fullName, setFullName] = useState('Tanmay Gupta');
  const [dob, setDob] = useState('DD/MM/YY');
  const [gender, setGender] = useState('Male');
  const [batch, setBatch] = useState('Batch(YYYY-YYYY)');
  const [branch, setBranch] = useState('Branch Name');
  const [contact, setContact] = useState('XXXXXXXXXX');
  const [email, setEmail] = useState('abc@xyz.com');
  const [currentAddress, setCurrentAddress] = useState('');

  // Educational Information State
  const [college, setCollege] = useState('BPIT');
  const [degree, setDegree] = useState('B.Tech');
  const [major, setMajor] = useState('Computer Science');
  const [graduationYear, setGraduationYear] = useState('YYYY');
  const [gpa, setGpa] = useState('XXXX');
  const [projects, setProjects] = useState('');

  // Professional Information State
  const [currentJobTitle, setCurrentJobTitle] = useState('SDE');
  const [currentCompanyName, setCurrentCompanyName] = useState('xyz');
  const [currentDuration, setCurrentDuration] = useState('start date to present');
  const [currentResponsibilities, setCurrentResponsibilities] = useState('YYYY');
  const [currentLocation, setCurrentLocation] = useState('');

  const [previousJobTitle, setPreviousJobTitle] = useState('SDE');
  const [previousCompanyName, setPreviousCompanyName] = useState('xyz');
  const [previousDuration, setPreviousDuration] = useState('start date to present');
  const [previousResponsibilities, setPreviousResponsibilities] = useState('YYYY');
  const [previousLocation, setPreviousLocation] = useState('');

  // Achievements Information State
  const [awardTitle, setAwardTitle] = useState('');
  const [awardDetails, setAwardDetails] = useState('');
  const [certificateTitle, setCertificateTitle] = useState('');
  const [certificateDetails, setCertificateDetails] = useState('');

  const renderContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="content">
            <div className="form-group">
              <label>Full name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Batch</label>
              <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Contact</label>
              <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Current Address</label>
              <input type="text" value={currentAddress} onChange={(e) => setCurrentAddress(e.target.value)} />
            </div>
          </div>
        );
      case 'educational':
        return (
          <div className="content">
            <div className="form-group">
              <label>College</label>
              <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Degree</label>
              <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Major/Field Of Study</label>
              <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Graduation Year</label>
              <input type="text" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
            </div>
            <div className="form-group">
              <label>GPA</label>
              <input type="text" value={gpa} onChange={(e) => setGpa(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Relevant Projects or Research</label>
              <input type="text" value={projects} onChange={(e) => setProjects(e.target.value)} />
            </div>
          </div>
        );
      case 'professional':
        return (
          <div className="content">
            <div className="employment-section">
              <h3>Current Employment</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" value={currentJobTitle} onChange={(e) => setCurrentJobTitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" value={currentCompanyName} onChange={(e) => setCurrentCompanyName(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration of Employment</label>
                  <input type="text" value={currentDuration} onChange={(e) => setCurrentDuration(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Responsibilities and Achievements</label>
                  <input type="text" value={currentResponsibilities} onChange={(e) => setCurrentResponsibilities(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label>Company Location</label>
                <input type="text" value={currentLocation} onChange={(e) => setCurrentLocation(e.target.value)} />
              </div>
            </div>
            <div className="employment-section">
              <h3>Previous Employment</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Job Title</label>
                  <input type="text" value={previousJobTitle} onChange={(e) => setPreviousJobTitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Company Name</label>
                  <input type="text" value={previousCompanyName} onChange={(e) => setPreviousCompanyName(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Duration of Employment</label>
                  <input type="text" value={previousDuration} onChange={(e) => setPreviousDuration(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Responsibilities and Achievements</label>
                  <input type="text" value={previousResponsibilities} onChange={(e) => setPreviousResponsibilities(e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label>Company Location</label>
                <input type="text" value={previousLocation} onChange={(e) => setPreviousLocation(e.target.value)} />
              </div>
            </div>
          </div>
        );
      case 'achievements':
        return (
          <div className="content">
            <div className="achievement-section">
              <h3>Awards</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Award Title</label>
                  <input type="text" value={awardTitle} onChange={(e) => setAwardTitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Details</label>
                  <input type="text" value={awardDetails} onChange={(e) => setAwardDetails(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="achievement-section">
              <h3>Certificates</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Certificate Title</label>
                  <input type="text" value={certificateTitle} onChange={(e) => setCertificateTitle(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Details</label>
                  <input type="text" value={certificateDetails} onChange={(e) => setCertificateDetails(e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tab-container">
      <div className="profile">
        <img src="profileimage.jpg" alt="Profile" className="profile-img" />
        <h3>Tanmay Gupta</h3>
        <p>Enroll No. 123456789xxx</p>
      </div>
      <div className="content-wrapper">
        <div className="tabs">
          <div className={`tab ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>Personal Information</div>
          <div className={`tab ${activeTab === 'educational' ? 'active' : ''}`} onClick={() => setActiveTab('educational')}>Educational Background</div>
          <div className={`tab ${activeTab === 'professional' ? 'active' : ''}`} onClick={() => setActiveTab('professional')}>Professional Information</div>
          <div className={`tab ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>Achievements</div>
        </div>
        <div className="content-container">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
