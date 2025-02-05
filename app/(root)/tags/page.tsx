import TagCard from "@/components/cards/TagCard";
import DataRenderer from "@/components/DataRenderer";
import LocalSearch from "@/components/search/LocalSearch";
import ROUTES from "@/constants/routes";
import { EMPTY_TAGS } from "@/constants/states";
import { getTags } from "@/lib/actions/tag.action";

const Tags = async ({ searchParams }: RouteParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getTags({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query,
    filter,
  });

  const { tags } = data || [];

  // Exemples de tags populaires à afficher sous forme de lien
  const popularTags = ["JavaScript", "React", "Node.js", "CSS", "MongoDB"];

  return (
    <>
      <h1 className="h1-bold text-dark100_light900 text-3xl">Tags</h1>

      <section className="mt-11">
        <LocalSearch
          route={ROUTES.TAGS}
          imgSrc="/icons/search.svg"
          placeholder="Search tags..."
          otherClasses="flex-1"
        />
      </section>

      {/* Affichage des tags populaires si disponibles */}
      <section className="mt-8">
        <h2 className="text-xl text-dark100_light800">Popular Tags</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-light300 rounded-full text-dark100_light900 hover:bg-dark100_light900 hover:text-light300 transition duration-300 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Affichage des tags récupérés depuis l'API */}
      <DataRenderer
        success={success}
        error={error}
        data={tags}
        empty={EMPTY_TAGS}
        render={(tags) => (
          <div className="mt-10 flex w-full flex-wrap gap-4">
            {tags.length === 0 ? (
              <p className="text-center text-lg text-dark100_light600">
                No tags found. Try searching for something else.
              </p>
            ) : (
              tags.map((tag) => (
                <TagCard key={tag._id} {...tag} />
              ))
            )}
          </div>
        )}
      />
    </>
  );
};

export default Tags;
