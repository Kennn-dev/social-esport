type TypeAvatar = 'normal' | 'large' | 'small' | 'square';
export const getAvatarFacebook = (
  id: string,
  accessToken: string,
  type: TypeAvatar,
): string => {
  return `https://graph.facebook.com/${id}/picture?access_token=${accessToken}&type=${type}`;
};
