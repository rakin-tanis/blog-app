#!/bin/bash

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Stormgade 8"' \
--form 'content="Stormgade 8 is a three-storey, 18th century property situated at Stormgade 8 in Copenhagen, Denmark. The buildingwas listed in the Danish registry of protected buildings and places in 1918. Stormgade 8 originates in two smaller town housesfrom before 1737 which were merged into one property in 1748. Adolph Sigfried von der Osten lived in the building from 1786 to 1794.[1]

Samfundet for Vanføre (now Sahva), a society for the relief of disabled people, purchased the building in 1888 after selling its old building on Toldbodvej to the politician Jacob Brønnum Scavenius Estrup. The society was based in the building until 1896.

The building was later acquired by the vintner Johan Fr. Schalburg. The company had been founded by Johan Heinrich Schalburg on 7 June 1817 in Nyborg on Funen and was moved to Copenhagen in 1870.[2] Evald Bach (born 1898) acquired the firm in 1938. It was based at Stormgade 8 until at least the 1950s.[3]

The printing business Vilh. Søborg'\''s Efterfølger was also based in the building inj 1910. In 1945, it relocated to Amaliegade 11. [4] Dansk Dental Depor, a wholesale Company catering to dental clinics, was also based in the building in 1950.[5]"' \
--form 'author="alan"' \
--form 'category="nature"' \
--form 'image=@"./blog-db/test-data/13.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Siddheshwari"' \
--form 'content="Siddheshwari is a 1989 Hindi documentary directed film by Mani Kaul. It is a cinematic portrait of Siddheshwari Devi, a Hindustani classical music singer from Varanasi, India.[1] It was produced by the Films Division of India. The film was awarded the National Award for the Best Documentary for that year in India.[2] Although the film defies a linear plot structure, it begins with a bilingual scrolling text in Hindi and English that indicates the dominant thematic that film is knitted with. The narrative meanders between the biographic moments of Siddheshwari Devi'\''s life, that describes her relationship with her guru and her benefactor, intertwined with the mythic history of thumri and tappa as a musical form located in the medieval ghats, gullies and mansions of Varanasi. For Mani Kaul this film, was a '\“'poetic documentary,'\“' [3] in an interview he says: '\“'in my own way, I have tried to bring poetry, documentary and fiction together. We would call it non-linear narrative.” [4]"' \
--form 'author="alan"' \
--form 'category="nature"' \
--form 'image=@"./blog-db/test-data/12.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Walnut Street Historic District (Augusta, Missouri)"' \
--form 'content="The Walnut Street Historic District is a national historic district located at the northern end of Augusta, St. Charles County, Missouri. The District includes residential and commercial buildings constructed from the mid-19th to mid-20th centuries. Although there have been some minor modifications, the District appears as it did when the town was founded, and many buildings are still owned by descendants of German settlers. Located in the district is the separately listed Staudinger-Grumke House-Store.[2] It was added to the National Register of Historic Places in"' \
--form 'author="alan"' \
--form 'category="nature"' \
--form 'image=@"./blog-db/test-data/11.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Gundam Universal Century technology"' \
--form 'content="Universal Century technology refers to technology created in the fictional Universal Century timeline of the Gundam anime media mix.[1] Although they are only fictional technologies, they form a base that of the Real Robot genre of anime originates from. These technologies and their theory are now influential to factual academic research[citation needed]. They have also influenced creations in other Animation series. [2] Universal Century technology debuted in Gundam Century, written by editors, academy and studios hired by Out magazine at that time,[3] later part of the book was endorsed by Sunrise and Bandai, and some of the authors of the articles within Gundam Century became official editors and writers of Gundam mechanics.[4] A main part of the book surrounds the discussion on real-life technologies including space habitats and mass driver. Later, following the trend of militaristic and technological interest in the community, Gundam Sentinel Special Edition included a section called Imidam 0093 (Innovative Mobile Suit Information Dictionary, Annual Series, intentionally using an m at the end to reference Gundam), subtitled "Basic Knowledge of Gundam Mechanics". Written by mechanical designer Katoki Hajime, summarized both in- and out-of-universe technologies of the Universal Century, sourcing from Gundam Century, Gun Sight, VF-1 Valkyrie, MS Graphical Guide 1~3, MSV Technical & History 1~3.[5] Gundam Officials has collected this information and has presented it along with plot history and character summaries in an encyclopedic form, and MS Encyclopedia 2003 has a short technical summary of these technologies in its first section before going into the lists of mobile weapons in different series, which earlier editions only have.[6]"' \
--form 'author="alan"' \
--form 'category="city"' \
--form 'image=@"./blog-db/test-data/10.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="1914 translation by H. Rackham"' \
--form 'content="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."' \
--form 'author="alan"' \
--form 'category="nature"' \
--form 'image=@"./blog-db/test-data/9.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Section 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\", written by Cicero in 45 BC"' \
--form 'content="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."' \
--form 'author="Charles"' \
--form 'category="nature"' \
--form 'image=@"./blog-db/test-data/8.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="1914 translation by H. Rackham"' \
--form 'content="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"' \
--form 'author="nikola"' \
--form 'category="sunset"' \
--form 'image=@"./blog-db/test-data/7.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Section 1.10.32 of \\\"de Finibus Bonorum et Malorum\\\", written by Cicero in 45 BC"' \
--form 'content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?."' \
--form 'author="galileo"' \
--form 'category="city"' \
--form 'image=@"./blog-db/test-data/6.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="The standard Lorem Ipsum passage, used since the 1500s"' \
--form 'content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' \
--form 'author="leonardo"' \
--form 'category="sunset"' \
--form 'image=@"./blog-db/test-data/5.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Where can I get some?"' \
--form 'content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don'\''t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn'\''t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."' \
--form 'author="newton"' \
--form 'category="river"' \
--form 'image=@"./blog-db/test-data/4.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Where does it come from?"' \
--form 'content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \\\"de Finibus Bonorum et Malorum\\\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \\\"Lorem ipsum dolor sit amet..\\\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \\\"de Finibus Bonorum et Malorum\\\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."' \
--form 'author="bohr"' \
--form 'category="nature"' \
--form 'image=@"./blog-db/test-data/3.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="Why do we use it?"' \
--form 'content="it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '\''Content here, content here'\'', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for '\''lorem ipsum'\'' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."' \
--form 'author="albert"' \
--form 'category="sunset"' \
--form 'image=@"./blog-db/test-data/2.jpg"'

echo '\n------------------------------------------------------------------------------\n'

curl --location --request POST 'localhost:8080/api/post/' \
--form 'title="What is Lorem Ipsum?"' \
--form 'content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'\''s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."' \
--form 'author="akin"' \
--form 'category="sunset"' \
--form 'image=@"./blog-db/test-data/1.jpg"'



















