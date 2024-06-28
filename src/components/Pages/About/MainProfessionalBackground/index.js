/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Section } from "@/components/Containers";
import { RightContent } from "@/components/AlignContent";
import { ListContainer, ListItem } from "@/components/ListContainer";
import { ListTitle, ListSubTitle, ListContent } from "@/objects/ListContent";

import Separator, { LineSeparator } from "@/objects/Separator";
import Paragraph from "@/objects/Paragraph";
import TagSkills from "@/objects/TagSkills";

const MainProfessionalBackground = () => (
  <Section>
    <Separator number="04" title="Main Professional Background" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">Typper</ListTitle>
          <ListSubTitle type="orange">
            FEB 2023~NOW / CEO AND CO-FOUNDER
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              As the CEO of Typper.io, my responsibilities include setting the
              strategic direction of the company, overseeing product
              development, managing the team, ensuring financial stability, and
              building partnerships. I am committed to fostering a culture of
              innovation and driving the company towards long-term success.
            </Paragraph>
            <Paragraph>
              Typper.io was born from the collective energy of four passionate
              tech enthusiasts who love technology, entrepreneurship, and
              artificial intelligence. As one of the founders and CEO, I am
              proud to say that Typper was an evolution of our previous venture.
            </Paragraph>
            <Paragraph>
              At Typper.io, our mission is to create innovative products powered
              by artificial intelligence. We’re currently focusing on the
              markets of Designers and Business Intelligence, aiming to
              revolutionize the way professionals work in these fields.
            </Paragraph>
            <Paragraph>
              In a remarkably short time, we have achieved incredible
              milestones, continuously growing and gaining visibility. Our team
              is dedicated to developing products that simplify the most tedious
              tasks, making daily routines more efficient and productive.
            </Paragraph>
            <Paragraph>
              Typper.io offers a suite of products designed to be your personal
              assistant. These include Typper BI for business intelligence,
              Typper Texts for document creation, Typper Images for visual
              content, and Typper Codes for coding assistance. Together, these
              tools help you work smarter and more effectively every day.
            </Paragraph>
            <TagSkills
              skills={[
                "Strategic Planning",
                "Team Management",
                "Strategic Partnerships",
                "Culture",
                "Financial Analysis",
              ]}
            />
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">BANKME</ListTitle>
          <ListSubTitle type="orange">
            SEP 2022~MAI 2024 / HEAD OF TECHNOLOGY
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              In my journey as Head of Technology, I faced the challenge of
              creating a robust technological structure for a rapidly growing
              company. I identified the need for an integrated approach to
              feature delivery, and to address this, I implemented
              cross-functional teams. My plan involved developing efficient
              processes such as onboarding new collaborators, demand lifecycle,
              and structuring the Upstream Board.
            </Paragraph>
            <Paragraph>
              To ensure code quality and documentation standardization, I
              established guidelines for code review and task scoring. I
              introduced practices such as Remote First, post-mortem analysis,
              mob programming, and agile processes. Additionally, I created a
              selection process for technical collaborators and adopted a
              centralized knowledge tool, fostering a culture of continuous
              improvement.
            </Paragraph>
            <Paragraph>
              During execution, I defined and supervised essential rituals such
              as dailies, technical refinements, planning, retrospectives, and
              produtech. I standardized tools and development methods, including
              naming conventions, commits, branches, and API documentation.
              Furthermore, I developed a guide for roles, responsibilities, and
              career paths, focusing on technical skills, deliverables, human
              skills, leadership, and strategic impact.
            </Paragraph>
            <Paragraph>
              The results were remarkable, including a 100% increase in team
              performance and the resolution of technical debts. Leading a data
              team, I drove innovations, efficiency, and technical excellence,
              significantly contributing to the company’s success. I mentored
              various areas of Bankme in leadership, organization, and
              processes, ensuring the delivery of consistent and scalable
              solutions through concepts of microservices and database
              segregation.
            </Paragraph>
            <TagSkills
              skills={[
                "Team Leadership",
                "Architecture",
                "Process Improvement",
                "Technology Team Culture",
                "Career Counseling",
                "Hiring",
                "NodeJS",
                "JavaScript",
                "Google Cloud Platform (GCP)",
                "AWS",
                "GitHub",
                "NestJS",
                "Next.js",
                "Angular",
                "ReactJS",
                "Metabase",
                "PostgreSQL",
                "ETL (Extract, Transform, Load)",
                "Continuous Integration and Delivery (CI/CD)",
                "RabbitMQ",
                "Solid",
                "Web Crawling",
                "Docker",
                "Amazon RDS",
                "Amazon EC2",
                "Amazon Route 53",
                "AWS Lambda",
              ]}
            />
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">BANKME</ListTitle>
          <ListSubTitle type="orange">
            MAR 2023~MAI 2023 / HEAD OF PRODUCT
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              I stepped into the role of leading the Product team during a
              critical phase when our processes were undefined and demand
              management was chaotic. The team faced a lack of clarity in
              prioritizing tasks and achieving visibility on deliveries.
              Recognizing the urgency, I took the challenge head-on to establish
              a solid foundation.
            </Paragraph>
            <Paragraph>
              My plan was straightforward but ambitious: implement a new product
              process to streamline demand arrival, improve prioritization, and
              enhance visibility. I collaborated with the team to design this
              new process, ensuring every member’s input was valued.
              Additionally, I introduced Personal Development Plans (PDP) for
              each team member, fostering their growth and aligning their
              individual goals with our collective objectives.
            </Paragraph>
            <Paragraph>
              Execution was key. We meticulously rolled out the new process,
              addressing challenges as they arose and refining our approach
              based on feedback. The introduction of PDPs empowered team members
              to take ownership of their development, contributing to a more
              engaged and productive workforce.
            </Paragraph>
            <Paragraph>
              By the end of this leadership period, the transformation was
              evident. We had a minimally organized team with a clear roadmap
              vision, structured processes for demand collection,
              prioritization, and execution. The foundation we laid set the
              stage for continued growth and success.
            </Paragraph>
            <TagSkills
              skills={[
                "Team Leadership",
                "Team Management",
                "Process Improvement",
                "Strategic Planning",
                "Task Prioritization",
                "Product Roadmap",
                "Personal Development Plan",
                "Team Building",
              ]}
            />
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">PROVI</ListTitle>
          <ListSubTitle type="orange">
            MAI 2022~SEP 2022 / ENGINEER MANAGER
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              At Provi, I embraced the challenges of tech management. Leading a
              tribe, I focused on creating new processes to boost squad
              organization and productivity. I conducted 1:1 meetings to
              understand team strengths and areas for improvement, dedicating
              70% of my time to people and team management and 30% to execution.
            </Paragraph>
            <Paragraph>
              Key priorities included People Management, Delivery Management
              (Sprints/Burndown), and Recruitment. A notable achievement was
              assisting in the architecture and implementation of the billing
              integration system.
            </Paragraph>
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">LUIZALABS</ListTitle>
          <ListSubTitle type="orange">2021~2022 / TECH LEAD</ListSubTitle>
          <ListContent>
            <Paragraph>
              My time at Magalu was a deep dive into BigTech, honing my
              strategic vision, process refinement, and cutting-edge technology
              skills. It was a training ground for both my technical and
              leadership abilities. As a Tech Lead in the MagaluPay tribe, I
              supported several squads focused on growing Magalu’s fintech
              products.
            </Paragraph>
            <Paragraph>
              I played a key role in both Upstream (feature refinement and
              preparation) and Downstream (documentation, POCs, monitoring)
              phases. A significant challenge was the development of the Wallet
              within MagaluPay, a project I’m particularly proud of.
            </Paragraph>
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">NEON</ListTitle>
          <ListSubTitle type="orange">
            2019~2021 / Tech Lead and Back End Cordinator
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              At Neon, I delivered one of my biggest case studies: a complete
              digital account for Brazilian micro-entrepreneurs. Leading a
              super-squad that later expanded into over 10 teams, I was the
              technical leader for the MEI Fácil app and its integration APIs
              with Banco Neon. I supported the teams during the stabilization
              period of this major project. Post-delivery, I served as the Tech
              Lead for both the Activation and Onboarding squads.
            </Paragraph>
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">MEI FÁCIL</ListTitle>
          <ListSubTitle type="orange">
            2018~2019 / Tech Lead and Back End Cordinator
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              I'm proud to have been one of the first Technology people to join
              this team.
            </Paragraph>
            <Paragraph>
              MEI Fácil was born with a hands-on spirit! In a short period of
              time, we became a reference for simplifying the bureaucracy for
              micro-entrepreneurs in Brazil.
            </Paragraph>
            <Paragraph>
              With three main pillars: Business Education, Bureaucracy, and
              Finance, MEI Fácil has become a super-app to solve a large part of
              the problems faced by MEIs in Brazil.
            </Paragraph>
            <Paragraph>
              It was here that I began my journey as a technical leader.
            </Paragraph>
            <Paragraph>
              I helped build a great team and also fostered a technology-driven
              culture.
            </Paragraph>
            <Paragraph>
              I served as a technical leader in several different projects, with
              a notable focus on the MEI Fácil Account, which evolved after the
              incorporation of MEI Fácil by Banco Neon.
            </Paragraph>
          </ListContent>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">UTFPR TEACHER</ListTitle>
          <ListSubTitle type="orange">
            2017~2019 / GRADUATION TEACHER
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              Back as an undergraduate professor, I had the opportunity to teach
              subjects focused on web development, as well as fundamental
              courses for computer science and computer engineering programs.
            </Paragraph>
            <Paragraph>
              Some of the courses I taught included: Web Programming, Data
              Structure, Desktop Programming, Integrator Project, Algorithms,
              and Introduction to Software Engineering.
            </Paragraph>
          </ListContent>
          <ListSubTitle type="orange">
            2013~2013 / POSTGRADUATE TEACHER
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              I had the opportunity to resume teaching for the postgraduate
              course in Java development. During this time, I taught a course
              focused on Servlets, JSP and basic technologies for Web
              developing.
            </Paragraph>
          </ListContent>
          <ListSubTitle type="orange">
            2008~2009 / GRADUATION TEACHER
          </ListSubTitle>
          <ListContent>
            <Paragraph>
              This was my first opportunity to fall in love with the academic
              field. Right after my graduation, I had the honor of teaching at
              the university where I graduated.
            </Paragraph>
            <Paragraph>
              During this time, I taught several courses, including Business
              Programming with C#, Web Programming, Basic Informatics, and
              Database Integrator Project.
            </Paragraph>
          </ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
);
export default MainProfessionalBackground;
