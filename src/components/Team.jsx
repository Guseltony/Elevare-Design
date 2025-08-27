import React from 'react'
import { teamMembers } from './utilities/membersArray'
import { MembersCard } from './utilities/membersCard'
import { HeaderSection } from './utilities/HeaderSection'

const Team = () => {
    return (
        <section className='w-screen relative '>
            <div className='relative w-full h-full z-20 bg-bg/80 backdrop-blur-md shadow-2xl  px-[15%] py-20 flex flex-col items-center'>
                <div className="text-box w-[50%] pr-12 text-center mb-12">
                    <HeaderSection intro={ 'Our Backbone'} header={'Elevare Brains'} details={'for every beautiful and inspiration design there are brains whose imagination created a stunning reality.'} />
                </div>
                <div className='flex items-center gap-4 w-full h-full'>
                    {
                        teamMembers.map((member) => (
                            <MembersCard key={member.id} {...member} />
                        )
                        )
                    }

                </div>
            </div>
        </section>
  )
}

export default Team