import { MdLockOutline } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

export default function Datagrid() {
  return (
    <div className="mx-auto max-w-7xl py-20">
      <div className="flex items-center justify-center p-10">
        <div className="text-purple-800 text-3xl px-5">
          <FaDatabase />
        </div>
        <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
          TriviaDatabase
        </div>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <button
                  layout
                  whileHover={{
                    scale: 1.1,
                  }}
                  whiletap={{ scale: 0.9 }}
                  className={`rounded uppercase items-center text-xl flex rounded font-medium transition ease-in-out   p-2 hover:scale-110  bg-amber-50 text-amber-500 dark:bg-amber-600 dark:text-amber-100`}
                >
                  <MdLockOutline />
                </button>
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://api.dicebear.com/8.x/thumbs/svg?seed=jack"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <div class="mb-2 flex gap-2">
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-red-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-amber-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-teal-600"></span>
              </div>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <button
                  layout
                  whileHover={{
                    scale: 1.1,
                  }}
                  whiletap={{ scale: 0.9 }}
                  className={`rounded uppercase items-center text-xl flex rounded font-medium transition ease-in-out   p-2 hover:scale-110  bg-amber-50 text-amber-500 dark:bg-amber-600 dark:text-amber-100`}
                >
                  <MdLockOutline />
                </button>
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://api.dicebear.com/8.x/thumbs/svg?seed=tomg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <div class="mb-2 flex gap-2">
                <span class="mb-2 h-[15px] w-10 rounded-xl bg-red-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-amber-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-teal-600"></span>
              </div>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <label>
                <button
                  layout
                  whileHover={{
                    scale: 1.1,
                  }}
                  whiletap={{ scale: 0.9 }}
                  className={`rounded uppercase items-center text-xl flex rounded font-medium transition ease-in-out   p-2 hover:scale-110  bg-amber-50 text-amber-500 dark:bg-amber-600 dark:text-amber-100`}
                >
                  <MdLockOutline />
                </button>
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://api.dicebear.com/8.x/thumbs/svg?seed=kehilp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className="badge badge-ghost badge-sm">
                Office Assistant I
              </span>
            </td>
            <td>Crimson</td>
            <th>
              <div class="mb-2 flex gap-2">
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-red-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-amber-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-teal-600"></span>
              </div>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <th>
              <label>
                <button
                  layout
                  whileHover={{
                    scale: 1.1,
                  }}
                  whiletap={{ scale: 0.9 }}
                  className={`rounded uppercase items-center text-xl flex rounded font-medium transition ease-in-out   p-2 hover:scale-110  bg-amber-50 text-amber-500 dark:bg-amber-600 dark:text-amber-100`}
                >
                  <MdLockOutline />
                </button>
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://api.dicebear.com/8.x/thumbs/svg?seed=mack"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span className="badge badge-ghost badge-sm">
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <th>
              <div class="mb-2 flex gap-2">
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-red-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-amber-600"></span>
                <span class="mb-2 h-[15px]  w-10 rounded-xl bg-teal-600"></span>
              </div>
            </th>
          </tr>
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
}
