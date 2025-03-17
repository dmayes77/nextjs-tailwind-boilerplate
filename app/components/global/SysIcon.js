import * as Fa5Icons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as MdIcons from "react-icons/md";
import * as LucideIcons from "react-icons/lu";
import * as FcIcons from "react-icons/fc";
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";

export default function SysIcon({
  name,
  set = "lui", // default variant is lucide
  size = 24,
  className = "",
}) {
  // Map each variant name to its corresponding icon library
  const iconSets = {
    lui: LucideIcons,
    fa5: Fa5Icons,
    fa6: Fa6Icons,
    mdi: MdIcons,
    fci: FcIcons,
    bsi: BsIcons,
    fii: FiIcons
  };

  const selectedSet = iconSets[set.toLowerCase()];
  if (!selectedSet) {
    console.warn(
      `❌ Icon set "${set}" not found. Available sets are: ${Object.keys(
        iconSets
      ).join(", ")}.`
    );
    return null;
  }

  const Icon = selectedSet[name];
  if (!Icon) {
    console.warn(`❌ Icon "${name}" not found in the ${set} icon set.`);
    return null;
  }

  return <Icon size={size} className={`${className} text-inherit`} />;
}
