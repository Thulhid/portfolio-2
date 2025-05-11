function Button({
  children,
  disabled,
  variant,
  onClick,
  link,
  title,
  isDownload = false,
}) {
  const base =
    "cursor-pointer hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md  active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ";

  const styles = {
    primary:
      base +
      "cursor-pointer rounded-2xl border-2 border-dashed border-blue-700 dark:border-gray-400 md:px-6 px-3 py-3 font-semibold text-gray-800 dark:text-gray-300 uppercase transition-all duration-300 bg-blue-200 dark:bg-sky-700 hover:shadow-[4px_4px_4px_rgba(96,165,250,2)] dark:hover:shadow-[4px_4px_6px_rgba(156,163,175,0.3)] text-shadow-sm text-sm md:text-base",
  };

  return (
    <>
      {!link ? (
        <button
          disabled={disabled}
          onClick={onClick}
          className={styles[variant]}
        >
          {children}
        </button>
      ) : (
        <a
          href={link || demoLink || gitHubLink}
          download={isDownload}
          className={variant ? styles[variant] : ""}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
        >
          {children}
        </a>
      )}
    </>
  );
}

export default Button;
