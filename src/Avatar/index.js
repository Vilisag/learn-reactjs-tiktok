import { useEffect, useState } from 'react';

function Avatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    } else {
      setAvatar(null);
    }
  };

  return (
    <div style={{ padding: '50px', direction: 'flex' }}>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="Avatar" width="80%" />}
    </div>
  );
}

export default Avatar;
