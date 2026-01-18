import { createMockRouter } from './createMockRouter';

describe('createMockRouter', () => {
  it('cria objeto com métodos do router', () => {
    const router = createMockRouter();

    expect(router).toHaveProperty('push');
    expect(router).toHaveProperty('replace');
    expect(router).toHaveProperty('prefetch');
    expect(router).toHaveProperty('back');
    expect(router).toHaveProperty('forward');
    expect(router).toHaveProperty('refresh');
  });

  it('todos os métodos são funções mock', () => {
    const router = createMockRouter();

    expect(typeof router.push).toBe('function');
    expect(typeof router.replace).toBe('function');
    expect(typeof router.prefetch).toBe('function');
    expect(typeof router.back).toBe('function');
    expect(typeof router.forward).toBe('function');
    expect(typeof router.refresh).toBe('function');
  });

  it('permite chamar métodos mock', () => {
    const router = createMockRouter();

    router.push('/test');
    router.replace('/test2');
    router.prefetch('/test3');
    router.back();
    router.forward();
    router.refresh();

    expect(router.push).toHaveBeenCalledWith('/test');
    expect(router.replace).toHaveBeenCalledWith('/test2');
    expect(router.prefetch).toHaveBeenCalledWith('/test3');
    expect(router.back).toHaveBeenCalled();
    expect(router.forward).toHaveBeenCalled();
    expect(router.refresh).toHaveBeenCalled();
  });
});
