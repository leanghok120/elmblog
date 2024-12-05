function PostCard({ title, date, author }) {
  return (
    <div className="p-5 border-2 border-base-200 shadow-xl rounded-xl mt-8">
      <a>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gruvbox-muted">{date}</p>
        <p className="mt-2">
          By <strong>{author}</strong>
        </p>
      </a>
    </div>
  );
}

export default PostCard;
