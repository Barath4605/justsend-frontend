import React from "react";

const BookmarkTitleModal = ({ onClose, onSave }) => {
  const [title, setTitle] = React.useState("");

  return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-2xl">
        <div className="bg-zinc-800 rounded-lg p-6 w-md">
          <h2 className="text-xl text-white mb-3">Save bookmark</h2>

          <input
              maxLength={50}
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Bookmark title"
              className="w-full p-2 rounded bg-zinc-700 text-white outline-none"
          />

          <div className="flex justify-end gap-3 mt-4">
            <button onClick={onClose} className="text-white/60 cursor-pointer">Cancel</button>
            <button
                disabled={!title.trim()}
                onClick={() => onSave(title)}
                className="bg-white text-black px-4 py-1 rounded disabled:opacity-40 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
  );
};

export default BookmarkTitleModal;
