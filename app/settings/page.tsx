const Settings = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[700px] mx-auto">
        <h1 className="text-3xl mb-8 text-center">Settings</h1>

        <h2 className="text-xl mb-4">Preferences</h2>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-400 mb-2">Username</label>
          <input type="text" id="username" name="username" defaultValue="mdotr" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="bio" className="block text-gray-400 mb-2">Bio</label>
          <input type="text" id="bio" name="bio" placeholder="Enter your bio" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="city" className="block text-gray-400 mb-2">City</label>
          <input type="text" id="city" name="city" placeholder="Select a city" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="twitter" className="block text-gray-400 mb-2">Twitter Link</label>
          <input type="text" id="twitter" name="twitter" placeholder="Twitter link" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="twitterFollowers" className="block text-gray-400 mb-2">Twitter Followers</label>
          <input id="twitterFollowers" name="twitterFollowers" placeholder="Number of followers" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="instagram" className="block text-gray-400 mb-2">Instagram Handle</label>
          <input type="text" id="instagram" name="instagram" placeholder="Instagram handle" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="instagramFollowers" className="block text-gray-400 mb-2">Instagram Followers</label>
          <input id="instagramFollowers" name="instagramFollowers" placeholder="Number of followers" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="tikTok" className="block text-gray-400 mb-2">TikTok Handle</label>
          <input type="text" id="tikTok" name="tikTok" placeholder="TikTok handle" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="tikTokFollowers" className="block text-gray-400 mb-2">TikTok Followers</label>
          <input id="tikTokFollowers" name="tikTokFollowers" placeholder="Number of followers" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="youtube" className="block text-gray-400 mb-2">YouTube Handle</label>
          <input type="text" id="youtube" name="youtube" placeholder="YouTube handle" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="soundcloud" className="block text-gray-400 mb-2">SoundCloud Handle</label>
          <input type="text" id="soundcloud" name="soundcloud" placeholder="SoundCloud handle" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="spotify" className="block text-gray-400 mb-2">Spotify URL</label>
          <input type="text" id="spotify" name="spotify" placeholder="Spotify URL" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <h2 className="text-xl mb-4">Preferences</h2>
        <div className="flex items-center justify-between mb-6">
          <label htmlFor="darkMode" className="text-gray-400">Dark Mode</label>
          <input type="checkbox" id="darkMode" name="darkMode" />
          <span className="slider round"></span>
          <label htmlFor="darkMode" className="text-gray-400">Light Mode</label>
        </div>

        <div className="mb-6">
          <label htmlFor="performerInfo" className="block text-gray-400 mr-2">Performer Info</label>
          <input type="checkbox" id="performerInfo" name="performerInfo" className="cursor-pointer" />
          <div className="mt-4">
            <div className="mb-4">
              <label htmlFor="independent" className="block text-gray-400 mb-2">Independent</label>
              <input type="text" id="independent" name="independent" placeholder="Independent" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="genre" className="block text-gray-400 mb-2">Select Genre</label>
              <input type="text" id="genre" name="genre" placeholder="Genre" className="w-full p-3 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
        </div>

        <h2 className="text-xl mb-4">Notifications</h2>
        <div className="mb-6">
          <h3 className="text-lg mb-2">Push Notifications</h3>
          <div className="flex items-center mb-4">
            <label htmlFor="allowDms" className="block text-gray-400 mr-2">Allow DMs</label>
            <input type="checkbox" id="allowDms" name="allowDms" className="cursor-pointer" />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg mb-2">Emails</h3>
          <div className="flex items-center mb-4">
            <label htmlFor="newAppReleases" className="block text-gray-400 mr-2">New App Releases</label>
            <input type="checkbox" id="newAppReleases" name="newAppReleases" className="cursor-pointer" />
          </div>
        </div>

        <h2 className="text-xl mb-4">More Options</h2>
        <div className="mb-6">
          <button className="w-full p-3 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">Go Premium</button>
          <button className="w-full p-3 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">Get Verified</button>
          <button className="w-full p-3 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-focus:ring-blue-500 mb-4">Give Us Feedback</button>
          <button className="w-full p-3 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">Privacy Policy</button>
          <button className="w-full p-3 bg-blue-500 rounded-md text-white cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">Terms of Service</button>
          <button className="w-full p-3 bg-red-500 rounded-md text-white cursor-pointer hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

