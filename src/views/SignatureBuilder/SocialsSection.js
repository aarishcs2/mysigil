import {useState} from 'react';

const SocialSection = ({ templateInfo, updateField, handleIconChange }) => {
  const [showAdditionalIcons, setShowAdditionalIcons] = useState(false);

  
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

  const handleShowLessMore = () => {
    setShowAdditionalIcons(!showAdditionalIcons);
  };
  

  return (
    <section>
      <h6 className='fw-bold'>Social Profiles</h6>
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

      {/* section for adding icons  */}
      {/* Toggle show more/less */}
      <h6 className='fw-bold mt-4' style={{color: '#065AD8', cursor: 'pointer'}} onClick={handleShowLessMore}>
        {showAdditionalIcons ? 'Show less' : 'Show more'} <i style={{color: '#065AD8'}} className={`fas fa-arrow-${showAdditionalIcons ? 'up' : 'down'}`}></i>
      </h6>

      {showAdditionalIcons && (
        <div>
          {/* List of remaining icons */}
          <div style={{ display: 'flex' }}>
            {['youtube', 'threads', 'telegram', 'pinintrest', 'bebe'].map((platform, index) => (
              <div key={platform} style={{ marginRight: index !== 4 ? '10px' : '0' }}>
                <img style={{ width: '2.5rem', height: '2.5rem' }} src={`/images/${platform}.png`} alt={platform} />
              </div>
            ))}
          </div>
          {/* Additional content div */}
          <div className="py-4 px-3 bg-light" style={{ border: "2px solid #065AD8", borderRadius: '0.5rem' }}>
            <label style={{height: '2rem'}} htmlFor="file-input" className="btn w-100 pt-1 btn-sm btn-primary">
            <span><i className="fas fa-plus p-1" style={{border: '1px solid white', borderRadius: "50%"}}></i> </span> 
              Upload Your own icon
            </label>
            <input
              id="file-input"
              type="file"
              accept=".png,"
              onChange={(e) => handleIconChange(e)}
              className='d-none'
            />
            <p className='text-center' style={{fontSize: '0.7rem', color: 'grey'}}>Best size 64px to 64px must be in PNG format only</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialSection;
