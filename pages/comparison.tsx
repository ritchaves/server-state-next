function Comparison() {
  return (
    <div className="col-start-2 col-end-3 row-start-2 row-end-3 drop-shadow-lg">
      <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          Client state libraries vs Server state libraries
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          Boilerplate reduce by a lot: server state libraries abstract us from
          adding loading state, error state..
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
          Bundle size
        </li>
        <li className="w-full px-4 py-2 rounded-b-lg">
          Comparison between libraries server state:
          <a
            href="https://react-query.tanstack.com/comparison#_top"
            className="underline"
          >
            comparison
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Comparison;
