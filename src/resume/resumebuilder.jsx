import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import 'tailwindcss/tailwind.css';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    links: [],
    education: [],
    projects: [],
    experiences: [],
    skills: [],
    extracurriculars: [],
    achievements: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = (field) => {
    setFormData({ ...formData, [field]: [...formData[field], {}] });
  };

  const handleNestedChange = (e, field, index) => {
    const { name, value } = e.target;
    const updatedField = formData[field].map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setFormData({ ...formData, [field]: updatedField });
  };

  const saveData = () => {
    localStorage.setItem('resumeData', JSON.stringify(formData));
  };

  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const downloadPdf = () => {
    const pdfContent = htmlToPdfmake(componentRef.current.innerHTML);
    const docDefinition = { content: pdfContent };
    pdfMake.createPdf(docDefinition).download('Resume.pdf');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
      <div>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="block w-full mb-2" required />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="block w-full mb-2" required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="block w-full mb-2" required />
        
        {/* Links Section */}
        <h2 className="text-xl font-bold mb-2">Links</h2>
        {formData.links.map((link, index) => (
          <div key={index} className="flex mb-2">
            <input type="text" name="linkName" placeholder="Link Name" value={link.linkName || ''} onChange={(e) => handleNestedChange(e, 'links', index)} className="block w-full mb-2" />
            <input type="url" name="url" placeholder="URL" value={link.url || ''} onChange={(e) => handleNestedChange(e, 'links', index)} className="block w-full mb-2" />
          </div>
        ))}
        <button onClick={() => handleAdd('links')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Link</button>

        {/* Education Section */}
        <h2 className="text-xl font-bold mb-2">Education</h2>
        {formData.education.map((edu, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 mb-2">
            <input type="text" name="year" placeholder="Year" value={edu.year || ''} onChange={(e) => handleNestedChange(e, 'education', index)} className="block w-full mb-2" />
            <input type="text" name="degree" placeholder="Degree/Board" value={edu.degree || ''} onChange={(e) => handleNestedChange(e, 'education', index)} className="block w-full mb-2" />
            <input type="text" name="institute" placeholder="Institute" value={edu.institute || ''} onChange={(e) => handleNestedChange(e, 'education', index)} className="block w-full mb-2" />
            <input type="text" name="gpa" placeholder="GPA/Marks(%)" value={edu.gpa || ''} onChange={(e) => handleNestedChange(e, 'education', index)} className="block w-full mb-2" />
          </div>
        ))}
        <button onClick={() => handleAdd('education')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Education</button>

        {/* Projects Section */}
        <h2 className="text-xl font-bold mb-2">Projects</h2>
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <input type="text" name="projectName" placeholder="Project Name" value={project.projectName || ''} onChange={(e) => handleNestedChange(e, 'projects', index)} className="block w-full mb-2" />
            <textarea name="description" placeholder="Description" value={project.description || ''} onChange={(e) => handleNestedChange(e, 'projects', index)} className="block w-full mb-2" />
          </div>
        ))}
        <button onClick={() => handleAdd('projects')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Project</button>

        {/* Experience Section */}
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        {formData.experiences.map((experience, index) => (
          <div key={index} className="mb-2">
            <input type="text" name="jobTitle" placeholder="Job Title" value={experience.jobTitle || ''} onChange={(e) => handleNestedChange(e, 'experiences', index)} className="block w-full mb-2" />
            <textarea name="role" placeholder="Role" value={experience.role || ''} onChange={(e) => handleNestedChange(e, 'experiences', index)} className="block w-full mb-2" />
            <textarea name="description" placeholder="Description" value={experience.description || ''} onChange={(e) => handleNestedChange(e, 'experiences', index)} className="block w-full mb-2" />
          </div>
        ))}
        <button onClick={() => handleAdd('experiences')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Experience</button>

        {/* Skills Section */}
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        {formData.skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <input
              type="text"
              name = {`skill_${index+1}`}
              placeholder={`Skill ${index + 1}`}
              value={skill || ''}
              onChange={(e) => handleNestedChange(e, 'skills', index)}
              className="block w-full mb-2"
            />
          </div>
        ))}
        <button onClick={() => handleAdd('skills')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Skill</button>

        {/* Extracurriculars Section */}
        <h2 className="text-xl font-bold mb-2">Extracurriculars</h2>
        {formData.extracurriculars.map((extra, index) => (
          <div key={index} className="mb-2">
            <input type="text" name="title" placeholder="Title" value={extra.title || ''} onChange={(e) => handleNestedChange(e, 'extracurriculars', index)} className="block w-full mb-2" />
            <textarea name="description" placeholder="Description" value={extra.description || ''} onChange={(e) => handleNestedChange(e, 'extracurriculars', index)} className="block w-full mb-2" />
          </div>
        ))}
        <button onClick={() => handleAdd('extracurriculars')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Extracurricular</button>

        {/* Achievements Section */}
        <h2 className="text-xl font-bold mb-2">Achievements</h2>
        {formData.achievements.map((achievement, index) => (
          <div key={index} className="mb-2">
            <input type="text" name="title" placeholder="Title" value={achievement.title || ''} onChange={(e) => handleNestedChange(e, 'achievements', index)} className="block w-full mb-2" />
            <textarea name="description" placeholder="Description" value={achievement.description || ''} onChange={(e) => handleNestedChange(e, 'achievements', index)} className="block w-full mb-2" />
          </div>
        ))}
        <button onClick={() => handleAdd('achievements')} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Achievement</button>

        <div className="flex gap-4">
          <button onClick={saveData} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
          <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded">Print</button>
          <button onClick={downloadPdf} className="bg-blue-500 text-white px-4 py-2 rounded">Download PDF</button>
        </div>
      </div>

      {/* PDF Content */}
      <div ref={componentRef} style={{ display: 'none' }}>
        <h1>{formData.name}</h1>
        <p>{formData.phone}</p>
        <p>{formData.email}</p>
        {/* Render the rest of the resume data similarly */}
      </div>
    </div>
  );
};

export default ResumeBuilder;