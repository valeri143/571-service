export const Error = ({ children }) => {
  return (
    <div
      style={{
        color: 'red',
        fontSize: 14,
        textAlign: 'center',
        marginTop: '-20px',
        marginBottom: '10px',
      }}
    >
      {children.toLowerCase()}
    </div>
  );
};
