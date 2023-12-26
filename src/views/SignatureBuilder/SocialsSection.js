import React from 'react';

const SocialSection = ({ templateInfo, updateField }) => {
  const toggleSocialIcons = () => {
    const socialMedia = ['facebook', 'twitter', 'instagram', 'linkedin', 'skype'];

    socialMedia.forEach((platform) => {
      const input = document.getElementById(`${platform}Input`);
      const icon = document.querySelector(`.${platform}`);

      if (input && icon) {
        if (input.value.trim() !== '') {
          icon.style.display = 'inline-block';
        } else {
          icon.style.display = 'none';
        }
      }
    });
  };

  // const handleInputChange = (platform, e) => {
  //   updateField(platform, e.target.value);
  //   toggleSocialIcons();
  // };

  const handleInputChange = (platform, e) => {
    updateField(platform.toLowerCase(), e.target.value, platform.toLowerCase());
    toggleSocialIcons();
  };
  

  return (
    <section>
      <h5>Social Profiles</h5>
      {['facebook', 'twitter', 'instagram', 'linkedin', 'skype'].map((platform) => (
        <div className='d-flex mt-3' key={platform}>
          <img style={{ width: '2.5rem', height: '2.5rem' }} src={`/images/${platform}.png`} alt={platform} />
          <input
            id={`${platform}Input`}
            placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} url`}
            className='form-control'
            value={templateInfo[platform]}
            onChange={(e) => handleInputChange(platform, e)}
          />
          {/* <a className={`${platform}`} href={templateInfo[platform]} style={{ display: 'none' }}>
            <img src={`/images/${platform}.png`} alt={platform} />
          </a> */}
        </div>
      ))}
    </section>
  );
};

export default SocialSection;
