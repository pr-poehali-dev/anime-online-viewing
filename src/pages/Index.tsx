import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);

  const genres = [
    'Экшен', 'Романтика', 'Комедия', 'Фэнтези', 'Драма', 'Меха', 'Исэкай', 'Школа', 'Спорт', 'Психология'
  ];

  const animeList = [
    {
      id: 1,
      title: 'Атака титанов: Финал',
      originalTitle: 'Shingeki no Kyojin: The Final Season',
      genre: 'Экшен',
      genres: ['Экшен', 'Драма', 'Фэнтези'],
      rating: 9.2,
      episodes: 12,
      currentEpisode: 8,
      status: 'ongoing',
      year: 2023,
      studio: 'MAPPA',
      voice: ['AniLibria', 'AniDUB', 'Субтитры'],
      type: 'ТВ Сериал',
      nextEpisode: '2 дня',
      image: 'https://via.placeholder.com/300x420/7E69AB/FFFFFF?text=Attack+on+Titan'
    },
    {
      id: 2,
      title: 'Магическая битва 3',
      originalTitle: 'Jujutsu Kaisen Season 3',
      genre: 'Экшен',
      genres: ['Экшен', 'Фэнтези', 'Сёнен'],
      rating: 8.9,
      episodes: 24,
      currentEpisode: 15,
      status: 'ongoing',
      year: 2024,
      studio: 'MAPPA',
      voice: ['AniLibria', 'AniDUB'],
      type: 'ТВ Сериал',
      nextEpisode: '4 дня',
      image: 'https://via.placeholder.com/300x420/9b87f5/FFFFFF?text=Jujutsu+Kaisen'
    },
    {
      id: 3,
      title: 'Ванпанчмен 3',
      originalTitle: 'One Punch Man Season 3',
      genre: 'Экшен',
      genres: ['Экшен', 'Комедия', 'Сёнен'],
      rating: 8.7,
      episodes: 12,
      currentEpisode: 5,
      status: 'ongoing',
      year: 2024,
      studio: 'Madhouse',
      voice: ['AniDUB', 'Субтитры'],
      type: 'ТВ Сериал',
      nextEpisode: '1 день',
      image: 'https://via.placeholder.com/300x420/0EA5E9/FFFFFF?text=One+Punch+Man'
    },
    {
      id: 4,
      title: 'Клинок рассекающий демонов',
      originalTitle: 'Kimetsu no Yaiba',
      genre: 'Фэнтези',
      genres: ['Фэнтези', 'Экшен', 'Сёнен'],
      rating: 9.0,
      episodes: 26,
      currentEpisode: 26,
      status: 'completed',
      year: 2019,
      studio: 'ufotable',
      voice: ['AniLibria', 'AniDUB', 'Субтитры'],
      type: 'ТВ Сериал',
      nextEpisode: null,
      image: 'https://via.placeholder.com/300x420/33C3F0/FFFFFF?text=Demon+Slayer'
    },
    {
      id: 5,
      title: 'Моя геройская академия 7',
      originalTitle: 'Boku no Hero Academia Season 7',
      genre: 'Экшен',
      genres: ['Экшен', 'Фэнтези', 'Школа'],
      rating: 8.5,
      episodes: 20,
      currentEpisode: 12,
      status: 'ongoing',
      year: 2024,
      studio: 'Bones',
      voice: ['AniLibria', 'Субтитры'],
      type: 'ТВ Сериал',
      nextEpisode: '3 дня',
      image: 'https://via.placeholder.com/300x420/7E69AB/FFFFFF?text=My+Hero+Academia'
    },
    {
      id: 6,
      title: 'Токийские мстители',
      originalTitle: 'Tokyo Revengers',
      genre: 'Драма',
      genres: ['Драма', 'Экшен', 'Сёнен'],
      rating: 8.3,
      episodes: 24,
      currentEpisode: 18,
      status: 'ongoing',
      year: 2023,
      studio: 'LIDENFILMS',
      voice: ['AniDUB', 'Субтитры'],
      type: 'ТВ Сериал',
      nextEpisode: '5 дней',
      image: 'https://via.placeholder.com/300x420/9b87f5/FFFFFF?text=Tokyo+Revengers'
    }
  ];

  const schedule = [
    { day: 'Понедельник', anime: 'Атака титанов: Финал', time: '19:00', nextIn: '2 дня' },
    { day: 'Вторник', anime: 'Ванпанчмен 3', time: '20:00', nextIn: '1 день' },
    { day: 'Среда', anime: 'Магическая битва 3', time: '18:30', nextIn: '4 дня' },
    { day: 'Четверг', anime: 'Моя геройская академия 7', time: '19:30', nextIn: '3 дня' },
    { day: 'Пятница', anime: 'Токийские мстители', time: '21:00', nextIn: '5 дней' }
  ];

  const forumPosts = [
    { user: 'AnimeOtaku', avatar: 'AO', topic: 'Обсуждение финала Атаки титанов', replies: 342, time: '2 часа назад' },
    { user: 'MangaReader', avatar: 'MR', topic: 'Лучшие аниме 2024 года', replies: 156, time: '5 часов назад' },
    { user: 'SenpaiNoticed', avatar: 'SN', topic: 'Рекомендации для новичков', replies: 89, time: '1 день назад' }
  ];

  const chatMessages = [
    { user: 'KawaiiChan', message: 'Кто уже посмотрел новую серию?', time: '12:45' },
    { user: 'OtakuPro', message: 'Я в шоке от последней битвы!', time: '12:47' },
    { user: 'AnimeKing', message: 'Спойлеры запрещены! 😤', time: '12:48' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AnimeStream
            </h1>
            <div className="hidden md:flex gap-6">
              <Button 
                variant={activeTab === 'home' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('home')}
                className="text-sm"
              >
                <Icon name="Home" className="mr-2 h-4 w-4" />
                Главная
              </Button>
              <Button 
                variant={activeTab === 'catalog' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('catalog')}
                className="text-sm"
              >
                <Icon name="Grid3x3" className="mr-2 h-4 w-4" />
                Каталог
              </Button>
              <Button 
                variant={activeTab === 'schedule' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('schedule')}
                className="text-sm"
              >
                <Icon name="Calendar" className="mr-2 h-4 w-4" />
                Расписание
              </Button>
              <Button 
                variant={activeTab === 'forum' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('forum')}
                className="text-sm"
              >
                <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                Форум
              </Button>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск аниме..."
                className="pl-10 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Icon name="Bell" className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Heart" className="h-5 w-5" />
            </Button>
            <Avatar className="cursor-pointer">
              <AvatarImage src="" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-8 md:p-12">
              <div className="relative z-10">
                <Badge className="mb-4 bg-primary">🔥 Новинка недели</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Атака титанов: Финал</h2>
                <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                  Эпическое завершение культовой истории о человечестве и титанах. 
                  Не пропустите финальные серии!
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="Play" className="mr-2 h-5 w-5" />
                    Смотреть
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Plus" className="mr-2 h-5 w-5" />
                    В избранное
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/30 to-transparent"></div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">🎬 Продолжить просмотр</h3>
                <Button variant="link" className="text-primary">
                  Показать всё
                  <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {animeList.slice(0, 6).map((anime, idx) => (
                  <Card 
                    key={anime.id} 
                    className="group cursor-pointer overflow-hidden border-border/40 hover:border-primary transition-all hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="relative aspect-[2/3] overflow-hidden">
                      <img 
                        src={anime.image} 
                        alt={anime.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {anime.status === 'ongoing' && (
                        <Badge className="absolute top-2 right-2 bg-accent">Онгоинг</Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <Button size="sm" className="w-full">
                            <Icon name="Play" className="mr-2 h-4 w-4" />
                            Продолжить
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-3">
                      <h4 className="font-semibold text-sm mb-1 line-clamp-2">{anime.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{anime.year} • {anime.type}</p>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="flex items-center text-yellow-500">
                          <Icon name="Star" className="mr-1 h-3 w-3 fill-yellow-500" />
                          {anime.rating}
                        </span>
                        <span className="text-muted-foreground">{anime.studio}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {anime.voice.slice(0, 2).map((v) => (
                          <Badge key={v} variant="outline" className="text-xs px-1 py-0">
                            {v}
                          </Badge>
                        ))}
                      </div>
                      {anime.currentEpisode < anime.episodes && (
                        <>
                          <Progress 
                            value={(anime.currentEpisode / anime.episodes) * 100} 
                            className="h-1 mb-1"
                          />
                          <p className="text-xs text-muted-foreground">
                            {anime.currentEpisode} из {anime.episodes} серий
                          </p>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">⭐ Популярное сейчас</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {animeList.slice(0, 4).map((anime) => (
                  <Card key={anime.id} className="overflow-hidden border-border/40 hover:border-primary transition-colors cursor-pointer group">
                    <div className="flex gap-4 p-4">
                      <div className="relative w-24 h-36 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={anime.image} 
                          alt={anime.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-lg mb-1">{anime.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{anime.originalTitle}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {anime.genres.slice(0, 3).map((g) => (
                            <Badge key={g} variant="secondary" className="text-xs">{g}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center text-yellow-500">
                            <Icon name="Star" className="mr-1 h-3 w-3 fill-yellow-500" />
                            {anime.rating}
                          </span>
                          <span>{anime.year}</span>
                          <span>{anime.studio}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          <span className="text-xs text-muted-foreground mr-2">Озвучка:</span>
                          {anime.voice.map((v) => (
                            <Badge key={v} variant="outline" className="text-xs">{v}</Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Серия {anime.currentEpisode} из {anime.episodes}
                        </p>
                        <Button size="sm" className="w-full">
                          <Icon name="Play" className="mr-2 h-4 w-4" />
                          Смотреть
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">🎯 Жанры</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {genres.map((genre) => (
                  <Button 
                    key={genre} 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    {genre}
                  </Button>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Каталог аниме</h2>
            </div>
            
            <div className="mb-6 space-y-4">
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">Жанры</p>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <Button 
                      key={genre} 
                      variant={selectedGenre === genre ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
                      className="text-xs"
                    >
                      {genre}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">Озвучка</p>
                <div className="flex flex-wrap gap-2">
                  {['AniLibria', 'AniDUB', 'Субтитры'].map((voice) => (
                    <Button 
                      key={voice} 
                      variant={selectedVoice === voice ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedVoice(selectedVoice === voice ? null : voice)}
                      className="text-xs"
                    >
                      {voice}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">Год выпуска</p>
                <div className="flex flex-wrap gap-2">
                  {['2024', '2023', '2022', '2021', '2020'].map((year) => (
                    <Button 
                      key={year} 
                      variant={selectedYear === year ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                      className="text-xs"
                    >
                      {year}
                    </Button>
                  ))}
                </div>
              </div>
              
              {(selectedGenre || selectedVoice || selectedYear) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {
                    setSelectedGenre(null);
                    setSelectedVoice(null);
                    setSelectedYear(null);
                  }}
                  className="text-primary"
                >
                  <Icon name="X" className="mr-2 h-4 w-4" />
                  Сбросить фильтры
                </Button>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {animeList.map((anime, idx) => (
                <Card 
                  key={anime.id} 
                  className="group cursor-pointer overflow-hidden border-border/40 hover:border-primary transition-all hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <img 
                      src={anime.image} 
                      alt={anime.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {anime.status === 'ongoing' && (
                      <Badge className="absolute top-2 right-2 bg-accent">Онгоинг</Badge>
                    )}
                  </div>
                  <CardContent className="p-3">
                    <h4 className="font-semibold text-sm mb-1 line-clamp-2">{anime.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{anime.year} • {anime.type}</p>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="flex items-center text-yellow-500">
                        <Icon name="Star" className="mr-1 h-3 w-3 fill-yellow-500" />
                        {anime.rating}
                      </span>
                      <span className="text-muted-foreground">{anime.studio}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {anime.voice.slice(0, 2).map((v) => (
                        <Badge key={v} variant="outline" className="text-xs px-1 py-0">
                          {v}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">📅 Расписание трансляций</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {schedule.map((item, idx) => (
                <Card 
                  key={idx} 
                  className="border-border/40 hover:border-primary transition-colors animate-scale-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.day}</h4>
                        <p className="text-2xl font-bold text-primary">{item.time}</p>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">
                        <Icon name="Clock" className="mr-1 h-3 w-3" />
                        {item.nextIn}
                      </Badge>
                    </div>
                    <p className="text-foreground font-medium mb-3">{item.anime}</p>
                    <Button size="sm" variant="outline" className="w-full">
                      <Icon name="Bell" className="mr-2 h-4 w-4" />
                      Напомнить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'forum' && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">💬 Форум</h2>
                  <Button>
                    <Icon name="Plus" className="mr-2 h-4 w-4" />
                    Новая тема
                  </Button>
                </div>
                <div className="space-y-4">
                  {forumPosts.map((post, idx) => (
                    <Card 
                      key={idx} 
                      className="border-border/40 hover:border-primary transition-colors cursor-pointer animate-scale-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarFallback>{post.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <p className="font-semibold">{post.user}</p>
                                <p className="text-sm text-muted-foreground">{post.time}</p>
                              </div>
                              <Badge variant="secondary">
                                <Icon name="MessageSquare" className="mr-1 h-3 w-3" />
                                {post.replies}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-lg hover:text-primary transition-colors">
                              {post.topic}
                            </h4>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">💭 Чат</h3>
                <Card className="border-border/40">
                  <CardContent className="p-0">
                    <ScrollArea className="h-[500px] p-4">
                      <div className="space-y-4">
                        {chatMessages.map((msg, idx) => (
                          <div key={idx} className="flex gap-3 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">{msg.user[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm">{msg.user}</span>
                                <span className="text-xs text-muted-foreground">{msg.time}</span>
                              </div>
                              <p className="text-sm">{msg.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter className="p-4 border-t border-border">
                    <div className="flex gap-2 w-full">
                      <Input placeholder="Написать сообщение..." />
                      <Button size="icon">
                        <Icon name="Send" className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;