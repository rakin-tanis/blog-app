import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const SocialMediaLinks = () => {
  const smList: { icon: [iconPrefix: IconPrefix, iconName: IconName], link: string }[] = [
    {
      icon: ['fab', 'instagram'],
      link: 'https://www.instagram.com'
    },
    {
      icon: ['fab', 'twitter'],
      link: 'https://www.twitter.com'
    },
    {
      icon: ['fab', 'pinterest'],
      link: 'https://www.pinterest.com'
    },
    {
      icon: ['fab', 'facebook'],
      link: 'https://www.facebook.com'
    }
  ]

  return (
    <div className='socialMedia'>
      {
        smList.map(sm => {
          return <a className='socialMediaLink' href={sm.link} target="_blank" rel="noreferrer" key={sm.link}>
            <FontAwesomeIcon icon={sm.icon} size="2x" />
          </a>
        })
      }
    </div>);
};

export default SocialMediaLinks;


/* 
 <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" onClick={() => openInNewTab('instagram')} />
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'pinterest']} size="2x" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
      </a>
*/