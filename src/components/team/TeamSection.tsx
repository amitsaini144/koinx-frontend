import TeamCard from "./TeamCard"
import teamOne from "@/assets/images/jack-finnigan.png"
import teamTwo from "@/assets/images/aiony-haust.png"
import teamThree from "@/assets/images/jurica-koletic.png"

export default function TeamSection() {
    return (
        <div className="bg-white md:pl-8 md:pr-10 px-2 pt-6 pb-4 rounded-lg shadow-sm mb-10">
            <h1 className="text-2xl font-semibold mb-5">Team</h1>
            <p className="font-medium text-sm text-black/90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.</p>
            <div>
                <TeamCard name="Jack Finnigan" imgUrl={teamOne} role="Designation here" description="Lorem ipsum dolor sit aLorem  Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet. " />
                <TeamCard name="Aiony Haust" imgUrl={teamTwo} role="Designation here" description="Lorem ipsum dolor sit aLorem  Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet. " />
                <TeamCard name="Jurica Koletic" imgUrl={teamThree} role="Designation here" description="Lorem ipsum dolor sit aLorem  Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet.Phasellus ornare congue interdum. Donec non nulla pretium, viverra neque elementum, mollis nisl. Donec auctor sapien at tellus sollicitudin hendrerit. Aenean felis arcu, sodales non mauris sit amet. " />
            </div>

        </div>
    )
}
