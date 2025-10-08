import { toast } from "react-toastify"

export const loadInstalled = () => {
  try {
    const data = localStorage.getItem('installation')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

// save
export const updateList = (app) => {
  const installation = loadInstalled();

  const isDuplicate = installation.some(p => p.id === app.id);
  if (isDuplicate) {
    toast.warn('App already installed!');
    return false; 
  }

  const updated = [...installation, app];
  localStorage.setItem('installation', JSON.stringify(updated));
  toast.success('App installed successfully!');
  return true; 
};

// delete
export const removeFromInstallation = id => {
  const installation = loadInstalled()
  try {
    const updatedInstallation = installation.filter(p => p.id !== id)
    localStorage.setItem('installation', JSON.stringify(updatedInstallation))
     toast('App removed successfully!');
  } catch (err) {
    console.log(err)
  }
}