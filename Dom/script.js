

document.addEventListener('DOMContentLoaded', function() {
    const profileContainer = document.getElementById('profile-container');
    
    const profileData = {
        name: 'Naveenraj',
        bio: 'Web Developer',
        image: 'https://www.shutterstock.com/image-photo/moscow-russia-june-27-2018-brazil-2161169409',
        social: {
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com'
        }
    };
    
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');
    
    profileCard.innerHTML = `
        <img src="${profileData.image}" alt="Profile Picture">
        <h2>${profileData.name}</h2>
        <p>${profileData.bio}</p>
        <div class="social-icons">
            <a href="${profileData.social.twitter}" target="_blank">Twitter</a>
            <a href="${profileData.social.linkedin}" target="_blank">LinkedIn</a>
        </div>
    `;
    
    profileContainer.appendChild(profileCard);
});
