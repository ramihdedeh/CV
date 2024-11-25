import React, { useState } from 'react';

function Section({ sectionTitle, fields }) {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState(
      fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
    );
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSubmit = () => {
      setIsEditing(false);
    };
  
    return (
      <div className="section">
        <h2>{sectionTitle}</h2>
        {isEditing ? (
          <div>
            {fields.map((field) => (
              <div key={field.name}>
                <label>{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
          </div>
        ) :
        //is not editing
        (
          <div>
            {fields.map((field) => (
              <p key={field.name}>
                <strong>{field.label}:</strong> {formData[field.name]}
              </p>
            ))}
            <button onClick={handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }







export default function CV() {
    const personalInfoFields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone', label: 'Phone', type: 'tel' },
      ];
    
      const educationFields = [
        { name: 'schoolName', label: 'School Name', type: 'text' },
        { name: 'titleOfStudy', label: 'Title of Study', type: 'text' },
        { name: 'dateOfStudy', label: 'Date of Study', type: 'date' },
      ];
    
      const experienceFields = [
        { name: 'companyName', label: 'Company Name', type: 'text' },
        { name: 'positionTitle', label: 'Position Title', type: 'text' },
        { name: 'responsibilities', label: 'Responsibilities', type: 'text' },
        { name: 'dateOfExperience', label: 'Date of Experience', type: 'date' },
      ];
    
      return (
        <div className="cv">
          <Section sectionTitle="Personal Information" fields={personalInfoFields} />
          <Section sectionTitle="Education" fields={educationFields} />
          <Section sectionTitle="Experience" fields={experienceFields} />
        </div>
      );
    }