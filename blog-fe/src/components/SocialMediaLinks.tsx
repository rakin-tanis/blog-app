import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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